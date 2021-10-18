import React, { useEffect, useMemo } from 'react';
import styles from './App.module.css';
import Search from './components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { SearchMode, searchVideos, selectIsLoading, selectQueryAndPage, selectVideos } from './redux/appSlice';
import Video from './components/Video/Video';
import { VideoType } from './types/types';



function App() {
  const dispatch = useDispatch();
  const { query, page } = useSelector(selectQueryAndPage);
  const isLoading = useSelector(selectIsLoading);
  const videos = useSelector(selectVideos);
  const videosElements = useMemo(() => videos.map((video:VideoType) => <Video video={video} key={video.id}/>), [videos]);

  useEffect(() => {
    function listner(){

      if (document.documentElement.clientHeight + window.pageYOffset === document.body.clientHeight && !isLoading){
        dispatch(searchVideos({ query, searchMode: SearchMode.Add, page }));
      }
    }

    window.addEventListener('scroll', listner);

    return () => window.removeEventListener('scroll', listner);
  }, [query, page, isLoading]);

  return (
    <div className="app_container" >
      <Search />
      <div className={styles.videos_container} data-testid="video-container" >
        {videosElements}
        {isLoading && <p className={styles.loading}> Загрузка...</p>}
      </div>
    </div>
  );
}

export default App;
