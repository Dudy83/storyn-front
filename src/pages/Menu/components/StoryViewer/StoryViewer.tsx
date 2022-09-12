import React, { FC } from 'react';
import './StoryViewer.scss';
import Stories from 'react-insta-stories';
import NoArticles from '../../../../assets/img/no-articles.png';
import { useSwipeable } from 'react-swipeable';

interface StoryViewerProps {
  stories: any,
  onSwipeDown: any,
  onStoryEnd: () => void
}

const StoryViewer: FC<StoryViewerProps> = ({ stories, onSwipeDown, onStoryEnd }) => {
  const leaveStory = useSwipeable({
    onSwipedDown: (e) => onSwipeDown(false)
  });

  return (
    <div className='StoryViewer' {...leaveStory}>
      <Stories
        stories={stories.data.length > 0 ? stories.data : [{ url: NoArticles }]}
        defaultInterval={1500}
        width={'100%'}
        height={'100%'}
        onAllStoriesEnd={onStoryEnd}
      />
    </div>
  )
};

export default StoryViewer;
