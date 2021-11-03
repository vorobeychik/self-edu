import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './BoardSearch.module.css';
import { store } from '../../../store/store';
import Icon from '../../Icon/Icon';
import { Icons } from '../../../enums/enums';

const BoardSearch = observer(() => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearched, setSearched] = useState(false);
  const [inputState, changeInputState] = useState('');

  useEffect(() => {
    if (isSearched && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearched]);

  function changeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    changeInputState(event.target.value);
    store.setSearchQuery(event.target.value);
  }

  function blurHandler() {
    if (inputState === '') {
      setSearched(false);
    }
  }

  function clickHandler() {
    setSearched(true);
  }

  return (
    <div className={styles.search_container} onClick={clickHandler}>
      <Icon iconType={Icons.Search} iconSize={14} />
      {isSearched
        ? (
          <input
            placeholder="Type to search..."
            value={inputState}
            ref={inputRef}
            onBlur={blurHandler}
            onChange={changeInputHandler}
            className={styles.input}
          />
        ) : <p className={styles.paragraph}>Search</p>}
    </div>
  );
});

export default BoardSearch;
