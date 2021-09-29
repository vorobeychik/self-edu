import React, { useState } from 'react';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { searchVideos, setQuery } from '../../redux/appSlice';

const Search = () => {
  let [inputState, setInputState] = useState('');
  const dispatch = useDispatch();

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>){
    setInputState(event.target.value);
  }

  function searchHandler(){
    dispatch(setQuery(inputState));
    dispatch(searchVideos(inputState));
  }

  function keyDownHandler(event: React.KeyboardEvent<HTMLDivElement>){
    if (event.keyCode === 13){
      dispatch(setQuery(inputState));
      dispatch(searchVideos(inputState));
    }
  }


  return (
        <div className={styles.search} onKeyDown={keyDownHandler}>
            <input type="text" value={inputState} onChange={changeHandler} className={styles.search_input} data-testid="search"/>
            <button className={styles.search_button} onClick={searchHandler} data-testid="search-button">Search</button>
        </div>
  );
};

export default Search;