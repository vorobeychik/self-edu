import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import styles from './EditableParagraph.module.css';

interface EditableParagraphProps{
  title: string,
  callBack: (title: string) => void | Promise<void>,
  className: string,
  inputClassName?: string,
  maxLength?: number,
}

const EditableParagraph = observer(({
  title, callBack, className, inputClassName, maxLength,
}:EditableParagraphProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = useState(title);

  function inputBlurHandler() {
    if (inputState !== '') {
      callBack(inputState);
    } else {
      callBack('Empty');
    }
  }

  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
  }

  function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      if (inputState !== '') {
        callBack(inputState);
      } else {
        callBack('Empty');
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
