import React, {useEffect, useState, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from './Modal.module.css';

const animationDuration = {
  enter: 400,
  exit: 400
};

const Modal = ({closed, show}) => {
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(show);

  useEffect(() => {
      setInProp(show);
  }, [show]);

  const onCloseHandler = () => {
    setInProp((prevState => !prevState));
  }

  return <CSSTransition
    nodeRef={nodeRef}
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
        ref={nodeRef}
        className={styles.Modal}>
        <h1>A Modal</h1>
        <button className="Button" onClick={onCloseHandler}>Dismiss</button>
      </div>
  </CSSTransition>
};

export default Modal;