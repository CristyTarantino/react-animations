import React, { useState, useRef } from 'react';
import styles from './List.module.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const List = () =>{
    const nodeRef = useRef(null);
    const [items, setItems] = useState([1, 2, 3]);

    const addItemHandler = () => {
        setItems((prevState) => prevState.concat(prevState.length + 1));
    }

    const removeItemHandler = (selIndex) => {
        setItems((prevState) => prevState.filter((item, index) => index !== selIndex));
    }

    const listItems = items.map( (item, index) => (
      <CSSTransition
        nodeRef={nodeRef}
        timeout={200}
        classNames={{
          enter: styles.fadeEnter,
          enterActive: styles.fadeEnterActive,
          exit: styles.fadeExit,
          exitActive: styles.fadeExitActive
        }}
        key={index}>
        <li
            ref={nodeRef}
            className={styles.ListItem}
            onClick={() => removeItemHandler(index)}>{item}</li>
      </CSSTransition>
    ) );

    return (
      <div>
          <button className="Button" onClick={addItemHandler}>Add Item</button>
          <p>Click Item to Remove.</p>
          <TransitionGroup
            component="ul"
            className={styles.List}>
            {listItems}
          </TransitionGroup>
      </div>
    );
}

export default List;