import React from 'react';

import classes from './Order.css';

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: WTF</p>
    <p>Price: <strong>{props.price}</strong></p>
    <div>{console.log(props.price)}</div>
  </div>
);

export default order;
