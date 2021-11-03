import React, { } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './BoardCategoryNote.module.css';
import { Note, Tag as TagType } from '../../../../types/types';
import { store } from '../../../../store/store';
import { useHover } from '../../../../hooks/useHover';
import Tag from '../../../Tag/Tag';
import Icon from '../../../Icon/Icon';

import { Icons } from '../../../../enums/enums';

interface BoardCategoryNoteProps{
  note: Note,
  dragStartHandler: (event: React.DragEvent<HTMLDivElement>) => void,
}

const BoardCategoryNote = observer(({ note, dragStartHandler }: BoardCategoryNoteProps) => {
  const { isHover, mouseHoverEvents } = useHover();

  function clickHandler() {
    store.selectNote(note);
    store.openNote();
  }

  function deleteClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    store.deleteNote(note);
  }

  function tagClickHandler(event: React.MouseEvent<HTMLDivElement>, tag:TagType) {
    event.stopPropagation();
    store.setTegFilter(tag);
  }


  const tags = note.tags.map((tag) => (
    <Tag
      tag={tag}
      onClick={(event) => tagClickHandler(event, tag)}
    />
  ));

  const propertyParagraph = note.properties[0] ? <p className={styles.property}>{note.properties[0].value}</p> : null;

  return (
    <div className={styles.note} onClick={clickHandler} onDragStart={dragStartHandler} {...mouseHoverEvents} draggable>
      <div className={styles.container}>
        <p className={styles.note_paragraph} onClick={clickHandler}>{ note.title }</p>
        {isHover
          ? (
            <Icon
              iconSize={14}
              iconType={Icons.Bin}
              onClick={deleteClickHandler}
              canHovered
            />
          )
          : null}
      </div>
      <div>
        {tags}
      </div>
      { propertyParagraph }
      {note.comments.length
        ? (
          <div className={styles.comment_container}>
            <Icon iconType={Icons.Comment} iconSize={11} />
            <p className={styles.comments_amount}>{note.comments.length}</p>
          </div>
        ) : null}
    </div>
  );
});

export default BoardCategoryNote;
