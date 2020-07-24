import React from 'react';

import styles from './Modal.module.css';

const Modal = ({closed, show}) => {
  const cssClasses = [styles.Modal, show ? styles.Modal___opened : styles.Modal___closed];

  return <div className={cssClasses.join(' ')}>
    <h1>A Modal</h1>
    <button className="Button" onClick={closed}>Dismiss</button>
  </div>
};

export default Modal;