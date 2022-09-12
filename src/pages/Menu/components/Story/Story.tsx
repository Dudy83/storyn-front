import React, { FC } from 'react';
import { getUrl } from '../../../../utils/helpers';
import { StoryModel } from './StoryModel';
import './Story.scss';
import noStoryFound from '../../../../assets/img/no-story-found.svg';
import story from '../../../../assets/img/story.svg';
import ProgressiveImage from '../../../../common/ProgressiveImage/ProgressiveImage';

interface StoryProps {
  data: StoryModel
}

const Story: FC<StoryProps> = ({ data: { stories, name, toggleStories } }) => {
  const thumbnail = stories.find((article) => article.url != null);

  return (
    <div className="Story">
      <div className="Bubble" onClick={toggleStories}>
        <img className="Circle" src={story} alt="cirlce" loading="lazy" />
        {(stories.length > 0 && thumbnail) ?
          (thumbnail.type ? <video src={thumbnail.url}></video> :
            <ProgressiveImage
              src={thumbnail.url}
              placeholderSrc={thumbnail.placeholder}
            />)
          : <img src={noStoryFound} loading="lazy" />}
      </div>
      {name && <p>{name}</p>}
    </div>
  );
}

export default Story;
