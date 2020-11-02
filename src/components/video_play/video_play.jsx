import React from 'react';
import styles from './video_paly.module.css';

const VideoPlay = (props) => {
  return (
    <div className={styles.container}>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${props.video.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>{props.video.snippet.title}</h2>
      <h3>{props.video.snippet.channelTitle}</h3>
      <p>{props.video.snippet.description}</p>
    </div>
  );
};

export default VideoPlay;
