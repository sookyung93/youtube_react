import React, { useRef } from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
  const layout = props.layout === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${layout} `}
      onClick={() => props.onVideoClick(props.video)}
    >
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
