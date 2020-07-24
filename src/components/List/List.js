import React, { useState } from 'react';
import styles from './List.module.css';

const List = () =>{
    const [items, setItems] = useState([1, 2, 3]);

    const addItemHandler = () => {
        setItems((prevState) => prevState.concat(prevState.length + 1));
    }

    const removeItemHandler = (selIndex) => {
        setItems((prevState) => prevState.filter((item, index) => index !== selIndex));
    }

    const listItems = items.map( (item, index) => (
        <li
            key={index}
            className={styles.ListItem}
            onClick={() => removeItemHandler(index)}>{item}</li>
    ) );

    return (
      <div>
          <button className="Button" onClick={addItemHandler}>Add Item</button>
          <p>Click Item to Remove.</p>
          <ul className={styles.List}>
              {listItems}
          </ul>
      </div>
    );
}

export default List;