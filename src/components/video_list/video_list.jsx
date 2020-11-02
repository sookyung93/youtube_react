import { render } from '@testing-library/react';
import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={props.onVideoClick}
          layout={props.layout}
        />
      ))}
    </ul>
  );
};

export default VideoList;
