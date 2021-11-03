import React from 'react';
import styles from './SideBarAddTitleButton.module.css';
import { store } from '../../../store/store';
import Icon from '../../Icon/Icon';
import { Icons } from '../../../enums/enums';

const SideBarAddTitleButton = () => {
  function clickHandler() {
    store.createNewBoard();
  }

  return (
    <div className={styles.add_button_container} onClick={clickHandler}>
      <Icon iconType={Icons.Plus} iconSize={16} />
      <button className={styles.add_button}>Add page</button>
    </div>
  );
};

export default SideBarAddTitleButton;
