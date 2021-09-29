import React from 'react';
import styles from './App.module.css';
import Search from './components/Search/Search';
import { useSelector } from 'react-redux';
import { selectVideos } from './redux/appSlice';
import Video from './components/Video/Video';
import { VideoType } from './types/types';


function App() {

  const videos = useSelector(selectVideos);
  const videosElements = videos.map((video:VideoType) => <Video video={video} key={video.id}/>);


  return (
    <div className="app_container">
      <Search />
      <div className={styles.videos_container}>
        {videosElements}
      </div>
    </div>
  );
}

export default App;
