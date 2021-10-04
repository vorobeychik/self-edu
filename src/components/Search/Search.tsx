import React, { useCallback, useState } from 'react';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { SearchMode, searchVideos, setQuery } from '../../redux/appSlice';

const Search = () => {
  let [inputState, setInputState] = useState('');
  const dispatch = useDispatch();

  const changeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  }, []);

  function searchHandler(){
    dispatch(setQuery(inputState));
    dispatch(searchVideos({ query: inputState, searchMode: SearchMode.Insert, page: '' }));
  }

  function keyDownHandler(event: React.KeyboardEvent<HTMLDivElement>){
    if (event.keyCode === 13){
      dispatch(setQuery(inputState));
      dispatch(searchVideos({ query: inputState, searchMode: SearchMode.Insert, page: '' }));
    }
  }


  return (
      <div>
        <div className={styles.search} onKeyDown={keyDownHandler}>
          <input type="text" value={inputState} onChange={changeHandler} className={styles.search_input} data-testid="search"/>
          <button className={styles.search_button} onClick={searchHandler} data-testid="search-button">Search</button>
        </div>
        <div className={styles.fakeSearch}>

        </div>
      </div>

  );
};

export default Search;