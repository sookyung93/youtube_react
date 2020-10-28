import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={props.video.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className={styles.description}>
          <p className={styles.description__title}>
            {props.video.snippet.title}
          </p>
          <p className={styles.description__channelTitle}>
            {props.video.snippet.channelTitle}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
