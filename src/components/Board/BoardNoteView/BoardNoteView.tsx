import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './BoardNoteView.module.css';
import { store } from '../../../store/store';
import EditableParagraph from '../../EditableParagraph/EditableParagraph';
import BoardNoteViewComment from './BoardNoteViewComment/BoardNoteViewComment';
import BoardNoteViewTags from './BoardNoteViewTags/BoardNoteViewTags';
import BoardNoteViewProperty from './BoardNoteViewProperty/BoardNoteViewProperty';
import Icon from '../../Icon/Icon';
import { Icons } from '../../../enums/enums';

const BoardNoteView = observer(() => {
  const note = store.selectedNote!;

  const [commentInput, setCommentInput] = useState('');

  function commentInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCommentInput(event.target.value);
  }

  function addNotePropertyHandler() {
    store.addProperty();
  }

  function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      store.addComment(note, commentInput);
      setCommentInput('');
    }
  }

  function wrapperClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      store.unselectNote();
      store.closeNote();
    }
  }

  const properties = note.properties.map((property) => <BoardNoteViewProperty property={property} />);

  const comments = note.comments.map((comment) => <BoardNoteViewComment comment={comment} />);

  return (
    <div className={styles.view_wrapper} onClickCapture={wrapperClickHandler}>
      <div className={styles.view_container}>
        <div className={styles.view_content_container}>
          <EditableParagraph title={note!.title} callBack={store.updateNoteTitle} className={styles.title} />
          <div className={styles.status_container}>
            <p className={styles.status}>Status</p>
            <p className={styles.status_value}>{note.status}</p>
          </div>
          <div className={styles.tag_container}>
            <p className={styles.tags}>Tags</p>
            <BoardNoteViewTags tags={note.tags} />
          </div>
          <div>
            {properties}
          </div>
          <div onClick={addNotePropertyHandler} className={styles.new_note_button}>
            <Icon iconSize={16} iconType={Icons.Plus} />
            <p>Add new property</p>
          </div>
          <div className={styles.comments_container}>
            {comments}
            <div className={styles.comments_input_container}>
              <div className={styles.icon_container}>
                <img alt="avatar" src={store.user.avatar_url} className={styles.icon} />
              </div>
              <input
                placeholder="Add a comment..."
                className={styles.comment_input}
                onChange={commentInputChangeHandler}
                value={commentInput}
                onKeyDown={keyDownHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BoardNoteView;
