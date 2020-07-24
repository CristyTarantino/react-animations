import React, {useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from './Modal.module.css';

const animationDuration = {
  enter: 400,
  exit: 400
};

const Modal = ({closed, show}) => {
  const [inProp, setInProp] = useState(show);

  useEffect(() => {
      setInProp(show);
  }, [show]);

  const onCloseHandler = () => {
    setInProp((prevState => !prevState));
  }

  return <CSSTransition
    in={inProp}
    timeout={animationDuration}
    unmountOnExit
    onExited={closed}
    classNames={{
      enter: '',
      enterActive: styles.Modal___opened,
      exit: '',
      exitActive: styles.Modal___closed
    }}>
      <div
        className={styles.Modal}>
        <h1>A Modal</h1>
        <button className="Button" onClick={onCloseHandler}>Dismiss</button>
      </div>
  </CSSTransition>
};

export default Modal;