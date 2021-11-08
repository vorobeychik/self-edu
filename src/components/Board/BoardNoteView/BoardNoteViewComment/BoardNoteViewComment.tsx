import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './BoardNoteViewComment.module.css';
import { Comments } from '../../../../types/types';
import { store } from '../../../../store/store';
import Icon from '../../../Icon/Icon';
import { Icons } from '../../../../enums/enums';
import { useHover } from '../../../../hooks/useHover';
import { commonIconSize } from '../../../../constants/const';

interface BoardNoteViewCommentProps{
  comment: Comments
}

const BoardNoteViewComment = observer(({ comment }: BoardNoteViewCommentProps) => {
  const { isHover, mouseHoverEvents } = useHover();

  function deleteCommentClickHandler() {
    store.deleteComment(comment);
  }

  return (
    <div className={styles.comment_container} {...mouseHoverEvents}>
      <div className={styles.container}>
        <div className={styles.comment_info_container}>
          <div className={styles.icon_container}>
            <img alt="avatar" src={store.user.avatar_url} className={styles.icon} />
          </div>
          <p className={styles.comment_user_name}>{ store.user.name }</p>
        </div>
        <p className={styles.comment_title}>{ comment.title }</p>
      </div>
      {
       isHover
         ? <Icon iconType={Icons.Bin} iconSize={commonIconSize} canHovered onClick={deleteCommentClickHandler} />
         : null
      }
    </div>
  );
});

export default BoardNoteViewComment;
