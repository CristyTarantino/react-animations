import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({show}) => {
  const cssClasses = [styles.Backdrop, show ? styles.Backdrop___opened : styles.Backdrop___closed];

  return <div className={cssClasses.join(' ')}/>
}

export default Backdrop;