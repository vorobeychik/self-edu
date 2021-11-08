import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import styles from './EditableParagraph.module.css';
import { emptyTitle, enterKey } from '../../constants/const';

interface EditableParagraphProps{
  title: string,
  callBack: (title: string) => void | Promise<void>,
  className: string,
  inputClassName?: string,
  maxLength?: number,
}

const EditableParagraph = observer(({
  title, callBack, className, inputClassName, maxLength,
}: EditableParagraphProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    setInputState(title);
  }, []);

  function inputBlurHandler() {
    if (inputState !== '') {
      callBack(inputState);
    } else {
      callBack(emptyTitle);
    }
  }

  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
  }

  function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === enterKey) {
      if (inputState !== '') {
        callBack(inputState);
      } else {
        callBack(emptyTitle);
      }
      inputRef.current!.blur();
    }
  }

  const inputClassNames = classNames(styles.input,
    { [className]: !!className }, { [inputClassName!]: !!inputClassName });

  return (
    <div className={styles.container}>
      <input
        className={inputClassNames}
        ref={inputRef}
        onBlur={inputBlurHandler}
        onKeyDown={keyDownHandler}
        value={inputState}
        onChange={inputChangeHandler}
        maxLength={maxLength}
      />
    </div>
  );
});

export default EditableParagraph;
