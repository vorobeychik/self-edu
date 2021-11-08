import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './BoardNoteViewProperty.module.css';
import { Property } from '../../../../types/types';
import EditableParagraph from '../../../EditableParagraph/EditableParagraph';
import { store } from '../../../../store/store';
import Icon from '../../../Icon/Icon';
import { Icons } from '../../../../enums/enums';
import { useHover } from '../../../../hooks/useHover';
import { commonIconSize } from '../../../../constants/const';

interface BoardNoteViewPropertyProps{
  property: Property
}

const BoardNoteViewProperty = observer(({ property }: BoardNoteViewPropertyProps) => {
  const { isHover, mouseHoverEvents } = useHover();

  function deletePropertyClickHandler() {
    store.deleteProperty(property);
  }

  return (
    <div className={styles.property_container} {...mouseHoverEvents}>
      <div className={styles.property}>
        <EditableParagraph
          title={property.title}
          callBack={(title) => store.changePropertyTitle(title, property)}
          className={styles.paragraph}
          inputClassName={styles.input}
        />
      </div>
      <div className={styles.property_value}>
        <EditableParagraph
          title={property.value}
          callBack={(title) => store.changePropertyValue(title, property)}
          className={styles.paragraph}
          inputClassName={styles.input}
        />
      </div>
      <Icon iconType={Icons.Bin} iconSize={commonIconSize} isHidden={!isHover} canHovered onClick={deletePropertyClickHandler} />
    </div>
  );
});

export default BoardNoteViewProperty;
