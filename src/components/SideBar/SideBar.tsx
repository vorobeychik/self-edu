import React, { useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './SideBar.module.css';
import { store } from '../../store/store';
import { Board } from '../../types/types';
import SideBarBoardTitle from './SideBarBoardTitle/SideBarBoardTitle';
import SideBarAddTitleButton from './SideBarAddTitleButton/SideBarAddTitleButton';
import Icon from '../Icon/Icon';
import { Icons } from '../../enums/enums';
import { isUserUsePhone } from '../../utils/utils';
import { bigIconSize, commonIconSize } from '../../constants/const';

const SideBar = observer(() => {
  const [isSideBarOpen, setSideBarState] = useState(!isUserUsePhone());

  const boardsTitles = useMemo(() => store.user.boards.map((board: Board) => (
    <SideBarBoardTitle
      board={board}
      key={board.id}
    />
  )),
  [store.user.boards]);

  function logOutClickHandler() {
    store.logOut();
  }

  function closeSideBarClickHandler() {
    setSideBarState(false);
  }

  function openSideBarClickHandler() {
    setSideBarState(true);
  }

  if (!isSideBarOpen) {
    return (
      <Icon
        iconType={Icons.Menu}
        iconSize={bigIconSize}
        canHovered
        onClick={openSideBarClickHandler}
        iconContainerStyles={styles.side_bat_open_icon}
      />
    );
  }

  return (
    <div className={styles.side_bar}>
      <div className={styles.user_profile} onClick={closeSideBarClickHandler}>
        <div className={styles.user_info}>
          <div className={styles.user_icon_container}>
            <img src={store.user.avatar_url} className={styles.user_icon} />
          </div>
          <p className={styles.username}>{store.user.name}</p>
        </div>
        <Icon iconType={Icons.LeftArrow} iconSize={commonIconSize} iconContainerStyles={styles.close_icon} />
      </div>
      <div className={styles.board_titles_container}>
        { boardsTitles }
        <SideBarAddTitleButton />
      </div>
      <div className={styles.log_out_container} onClick={logOutClickHandler}>
        <Icon iconType={Icons.LogOut} iconSize={commonIconSize} />
        <p className={styles.log_out_paragraph}>Log Out</p>
      </div>
    </div>
  );
});

export default SideBar;
