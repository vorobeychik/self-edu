import React from 'react';
import classNames from 'classnames';
import styles from './Icon.module.css';
import { Icons } from '../../enums/enums';

interface IconProps{
  iconType: Icons,
  iconSize: number,
  canHovered?: boolean,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | Promise<void>,
  iconContainerStyles?: string,
  isHidden?: boolean,
}

const Icon = ({
  iconSize, canHovered, onClick, iconType, iconContainerStyles, isHidden,
}: IconProps) => {
  const iconContainerClasses = classNames(
    styles.icon_container,
    { [styles.icon_container_active]: canHovered },
    { [iconContainerStyles!]: iconContainerStyles },
    { [styles.isHidden]: isHidden },
  );

  return (
    <div className={iconContainerClasses} onClick={onClick} style={{ width: `${iconSize}px`, height: `${iconSize}px` }}>
      <img className={styles.icon} src={iconType} alt="user icon" />
    </div>
  );
};

export default Icon;
