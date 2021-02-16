import React, {useEffect, useRef, useState} from 'react';
import {Transition} from 'react-transition-group';
import styles from './Modal.module.css';

const animationDuration = {
  enter: 400,
  exit: 400
};

const Modal = ({closed, show}) => {
  const [inProp, setInProp] = useState(show);
  const nodeRef = useRef(null)
  const cssClasses = (state) => [styles.Modal, state === 'entering' ? styles.Modal___opened : state === 'exiting' ? styles.Modal___closed : null].join(' ');

  useEffect(() => {
      setInProp(show);
  }, [show]);

  const onCloseHandler = () => {
    setInProp((prevState => !prevState));
  }

  return <Transition nodeRef={nodeRef} in={inProp} timeout={animationDuration} mountOnEnter unmountOnExit onExited={closed}>
    {state => (
      <div ref={nodeRef} className={cssClasses(state)}>
        <h1>A Modal</h1>
        <button className="Button" onClick={onCloseHandler}>Dismiss</button>
      </div>
    )}
  </Transition>
};

export default Modal;