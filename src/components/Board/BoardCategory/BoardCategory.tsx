import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './BoardCategory.module.css';
import { Category, Note, PlaceHolder } from '../../../types/types';
import { store } from '../../../store/store';
import { createPlaceHolders } from '../../../utils/utils';
import BoardCategoryNote from './BoardCategoryNote/BoardCategoryNote';
import BoardCategoryPlaceHolder from './BoardCategoryPlaceHolder/BoardCategoryPlaceHolder';
import EditableParagraph from '../../EditableParagraph/EditableParagraph';
import { useHover } from '../../../hooks/useHover';
import Icon from '../../Icon/Icon';
import { Icons } from '../../../enums/enums';
import { commonIconSize, mediumIconSize } from '../../../constants/const';

interface BoardCategoryProps{
  category: Category;
}

const BoardCategory = observer(({ category }: BoardCategoryProps) => {
  const { isHover, mouseHoverEvents } = useHover();

  function noteDragStartHandler(event: React.DragEvent<HTMLDivElement>, note: Note) {
    store.selectNote(note);
  }

  function addButtonClickHandler() {
    store.createNewNote(category);
  }

  function noteDropHandler(event: React.DragEvent<HTMLDivElement>, placeHolder: PlaceHolder) {
    event.preventDefault();
    store.changeNotePlace(placeHolder);
  }

  const placeHolders = createPlaceHolders(category.notes.length, category.id);
  const notes = useMemo(() => category.notes.map((note, index) => (
    <>
      <BoardCategoryPlaceHolder
        dropHandler={(event: React.DragEvent<HTMLDivElement>) => noteDropHandler(event, placeHolders[index])}
      />
      <BoardCategoryNote
        note={note}
        dragStartHandler={(event) => noteDragStartHandler(event, note)}
        key={note.id}
      />
    </>
  )), [category.notes]);

  function deleteCategoryButtonHandler() {
    store.deleteCategory(category);
  }

  return (
    <div className={styles.category} {...mouseHoverEvents}>
      <div className={styles.category_title_container}>
        <div className={styles.title_info_container}>
          <EditableParagraph
            title={category.name}
            maxLength={30}
            callBack={(title) => store.updateCategoryTitle(title, category)}
            className={styles.category_title}
          />
          <p className={styles.note_amount}>
            { notes.length }
          </p>
        </div>
        {isHover
          ? (
            <div className={styles.title_button_container}>
              <Icon iconSize={mediumIconSize} iconType={Icons.Plus} onClick={addButtonClickHandler} canHovered />
              <Icon iconSize={mediumIconSize} iconType={Icons.Bin} onClick={deleteCategoryButtonHandler} canHovered />
            </div>
          )
          : null}
      </div>
      <div className={styles.notes_container}>
        {notes}
        <BoardCategoryPlaceHolder
          dropHandler={(event: React.DragEvent<HTMLDivElement>) => noteDropHandler(event, placeHolders[category.notes.length])}
        />
      </div>
      <div>
        <div onClick={addButtonClickHandler} className={styles.new_note_button}>
          <Icon iconSize={commonIconSize} iconType={Icons.Plus} />
          <p>New</p>
        </div>
      </div>
    </div>
  );
});

export default BoardCategory;
