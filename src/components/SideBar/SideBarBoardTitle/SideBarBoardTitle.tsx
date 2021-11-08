import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './SideBarBoardTitle.module.css';
import { Board } from '../../../types/types';
import { store } from '../../../store/store';
import Icon from '../../Icon/Icon';
import { Icons } from '../../../enums/enums';
import { commonIconSize, mediumIconSize } from '../../../constants/const';

interface SideBarBoardTitleProps{
  board: Board
}

const SideBarBoardTitle = observer(({ board }: SideBarBoardTitleProps) => {
  function clickHandler() {
    store.selectBoard(board.id);
  }

  function deleteBoardClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    store.deleteBoard(board);
  }

  return (
    <div className={styles.board_title_container} onClick={clickHandler}>
      <div className={styles.container}>
        <Icon iconType={Icons.File} iconSize={mediumIconSize} />
        <p className={styles.board_title_paragraph}>{ board.name }</p>
      </div>
      <Icon iconType={Icons.Bin} iconSize={commonIconSize} onClick={deleteBoardClickHandler} />
    </div>
  );
});

export default SideBarBoardTitle;
