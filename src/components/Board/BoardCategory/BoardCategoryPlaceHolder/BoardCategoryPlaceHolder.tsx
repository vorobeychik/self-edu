import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import styles from './BoardCategoryPlaceHolder.module.css';

interface BoardCategoryPlaceHolderProps{
  dropHandler: (event: React.DragEvent<HTMLDivElement>) => void | Promise<void>;
}

const BoardCategoryPlaceHolder = observer(({ dropHandler }: BoardCategoryPlaceHolderProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  function placeHolderDragOverHandler(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragOver(true);
  }

  function placeHolderDragLeaveHandler() {
    setIsDragOver(false);
  }

  function placeHolderDropHandler(event: React.DragEvent<HTMLDivElement>) {
    dropHandler(event);
    setIsDragOver(false);
  }

  const classes = classNames({ [styles.placeholder]: !isDragOver }, { [styles.placeholder_active]: isDragOver });

  return (
    <div
      onDragOver={placeHolderDragOverHandler}
      onDragLeave={placeHolderDragLeaveHandler}
      onDrop={placeHolderDropHandler}
      className={classes}
      draggable
    />
  );
});

export default BoardCategoryPlaceHolder;
