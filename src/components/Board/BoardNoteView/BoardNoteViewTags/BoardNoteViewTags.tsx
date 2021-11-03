import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './BoardNoteViewTags.module.css';
import { store } from '../../../../store/store';
import { Tag as TagType } from '../../../../types/types';
import Tag from '../../../Tag/Tag';

interface BoardNoteViewTagsProps{
  tags: TagType[],
}

const BoardNoteViewTags = observer(({ tags }:BoardNoteViewTagsProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const tagElements = tags.map((tag) => <Tag tag={tag} isEditing={isEditing} />);

  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
  }

  function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      store.addTag(inputState);
      setInputState('');
      setIsEditing(false);
    }
  }

  function inputBlurHandler() {
    setInputState('');
  }

  function clickHandler() {
    setIsEditing(true);
  }

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.tags_container}>
        {tagElements}
        {isEditing
          ? (
            <input
              ref={inputRef}
              value={inputState}
              onChange={inputChangeHandler}
              onKeyDown={keyDownHandler}
              onBlur={inputBlurHandler}
              className={styles.input}
            />
          ) : null}
      </div>
    </div>
  );
});

export default BoardNoteViewTags;
