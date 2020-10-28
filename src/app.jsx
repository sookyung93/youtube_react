import React from 'react';
import { useState, useEffect } from 'react';
import './app.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Header onSearch={search} videos={videos} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
