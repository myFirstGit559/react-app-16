import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Cheese', type: 'cheese'},
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
 return (
   <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngridient(ctrl.type)}
        removed={() => props.removeIngridient(ctrl.type)}
        disabled={props.disabledOn[ctrl.type]}/>
    ))}
    <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
   </div>
 )
}

export default buildControls;
