import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Tag.module.css';
import { Tag as TagType } from '../../types/types';
import { store } from '../../store/store';
import Icon from '../Icon/Icon';
import { Icons } from '../../enums/enums';

interface TagProps{
  tag: TagType,
  isEditing?: boolean,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Tag = observer(({ tag, isEditing, onClick }:TagProps) => {
  function deleteTagClickHandler(event:React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    store.deleteTag(tag);
  }

  return (
    <div className={styles.tag_container} style={{ backgroundColor: tag.color }} onClick={onClick}>
      <div className={styles.container}>
        <span className={styles.tag_paragraph}>{tag.title}</span>
        {isEditing
          ? <Icon iconType={Icons.Close} iconSize={16} onClick={deleteTagClickHandler} />
          : null}
      </div>
    </div>
  );
});

export default Tag;
