import React, { useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Board.module.css';
import { store } from '../../store/store';
import BoardCategory from './BoardCategory/BoardCategory';
import EditableParagraph from '../EditableParagraph/EditableParagraph';
import Icon from '../Icon/Icon';
import { Icons } from '../../enums/enums';
import BoardSearch from './BoardSearch/BoardSearch';
import { largeIconSize } from '../../constants/const';

const Board = observer(() => {
  const board = store.selectedBoard!;
  const categories = store.selectedCategories;

  const categoriesElements = useMemo(
    () => categories!.map((category) => <BoardCategory category={category} key={category.id} />),
    [categories],
  );

  const clickHandler = useCallback(() => {
    store.createNewCategory();
  }, []);

  const unselectTagsClickHandler = useCallback(() => {
    store.unselectTagFilter();
  }, []);

  return (
    <div className={styles.board}>
      <div className={styles.content_container}>
        <EditableParagraph title={board.name} callBack={store.updateBoardTitle} className={styles.board_title} />
        <div className={styles.board_controls}>
          <Icon iconType={Icons.Plus} iconSize={largeIconSize} onClick={clickHandler} canHovered />
          <BoardSearch />
          {
           store.tagFilter
             ? (
               <button
                 type="button"
                 onClick={unselectTagsClickHandler}
                 className={styles.tag_filter_button}
               >
                 Unselect Tag Filter
               </button>
             ) : null
          }
        </div>

        <div className={styles.category_container}>
          { categoriesElements }
        </div>
      </div>
    </div>
  );
});

export default Board;
