import { useState } from 'react';
import { isUserUsePhone } from '../utils/utils';

export function useHover() {
  const [isHover, setIsHoverd] = useState(false);
  const isPhoneUsed = isUserUsePhone();

  function onMouseEnter() {
    setIsHoverd(true);
  }

  function onMouseLeave() {
    setIsHoverd(false);
  }

  return { isHover: isHover || isPhoneUsed, mouseHoverEvents: { onMouseEnter, onMouseLeave } };
}
