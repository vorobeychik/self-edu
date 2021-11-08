import { useState } from 'react';
import { isUserUsePhone } from '../utils/utils';

export function useHover() {
  const [isHover, setIsHover] = useState(false);
  const isPhoneUsed = isUserUsePhone();

  function onMouseEnter() {
    setIsHover(true);
  }

  function onMouseLeave() {
    setIsHover(false);
  }

  return { isHover: isHover || isPhoneUsed, mouseHoverEvents: { onMouseEnter, onMouseLeave } };
}
