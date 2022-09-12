import React, { FC, useEffect, useState } from 'react';
import { MenuStoriesModel } from './MenuStoriesModel';
import Story from '../Story/Story';
import './MenuStories.scss';
import StoryViewer from '../StoryViewer/StoryViewer';
import NoArticles from '../../../../assets/img/no-articles.png';

interface MenuStoriesProps {
  data: MenuStoriesModel
}



const MenuStories: FC<MenuStoriesProps> = ({ data: { stories } }) => {
  const [activeStories, setActiveStories] = useState<any>();
  const [showStories, setShowStories] = useState<boolean>(false);

  const allStories: any = []
  
  // stories.forEach((story) => {
  //   story.stories.length == 0 && story.stories = [{ url: NoArticles }];
  //   story.stories.forEach((x: any) => {
  //     console.log(x);
  //     allStories.push(story.stories.length > 0 ? x : { url: NoArticles })
  //   })
  // })

  // console.log(allStories, stories);

  const nextStories = (child: any) => child.id >= stories.length ? stories[child.id+1].stories : false;

  useEffect(() => {
    activeStories === false && setShowStories(false);
  }, [activeStories])

  return (
    <>
      {stories && <div className="MenuStories">
        {stories.map((story, i) =>
          <Story
            key={i}
            data={{
              stories: story.stories,
              name: story.name,
              toggleStories: () => (setActiveStories({ data: story.stories, id: i }), setShowStories(true))
            }}
          />)}

        {(activeStories && showStories) &&
          <StoryViewer
            stories={activeStories}
            onSwipeDown={setShowStories}
            onStoryEnd={() => setActiveStories([nextStories(activeStories)])}
          />
        }
      </div>}
    </>
  )
};
export default MenuStories;
