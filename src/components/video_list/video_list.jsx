import { render } from '@testing-library/react';
import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => {
  // const makeId = (video) => {
  //   const id = video.id.videoId ? video.id.videoId : video.id;
  //   return id;
  // };
  // return (
  //   <ul className={styles.videos}>
  //     {props.videos.map((video) => (
  //       <VideoItem key={makeId(video)} video={video} />
  //     ))}
  //   </ul>
  // );
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
