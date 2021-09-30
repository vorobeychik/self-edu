import React, { useEffect, useMemo } from 'react';
import styles from './App.module.css';
import Search from './components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { SearchMode, searchVideos, selectQuery, selectVideos } from './redux/appSlice';
import Video from './components/Video/Video';
import { VideoType } from './types/types';



function App() {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const videos = useSelector(selectVideos);
  const videosElements = useMemo(() => videos.map((video:VideoType) => <Video video={video} key={video.id}/>), [videos]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.clientHeight + window.pageYOffset === document.body.clientHeight){
        dispatch(searchVideos({ query, searchMode: SearchMode.Add }));
      }
    });
  }, []);

  return (
    <div className="app_container" onScroll={() => console.log(1)}>
      <Search />
      <div className={styles.videos_container} data-testid="video-container" >
        {videosElements}
      </div>
    </div>
  );
}

export default App;
