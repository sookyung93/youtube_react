import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/header/header';
import VideoPlay from './components/video_play/video_play';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos); //
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={styles.app}>
      <Header onSearch={search} videos={videos} />
      <section className={styles.container}>
        {selectedVideo && (
          <div className={styles.play}>
            <VideoPlay video={selectedVideo} />
          </div>
        )}
        <div className={selectedVideo ? `${styles.list}` : ''}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            layout={selectedVideo ? 'list' : 'gird'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
