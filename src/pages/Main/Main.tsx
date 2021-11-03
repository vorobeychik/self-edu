import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Main.module.css';
import SideBar from '../../components/SideBar/SideBar';
import Board from '../../components/Board/Board';
import BoardNoteView from '../../components/Board/BoardNoteView/BoardNoteView';
import { store } from '../../store/store';

const Main = observer(() => (
  <div className={styles.main_container}>
    {store.isNoteOpen ? <BoardNoteView /> : null}
    <SideBar />
    <Board />
  </div>
));

export default Main;
