import React from 'react';

const VideoItem = (props) => {
  return <p>{props.video.snippet.title}</p>;
};

export default VideoItem;
