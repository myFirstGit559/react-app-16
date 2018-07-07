import React from 'react';

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
 const ingridientSummary = Object.keys(props.ingridients)
 .map(igKey => {
   return  <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingridients[igKey]}</li>;
 })
 return (
   <Aux>
    <h3>Your order</h3>
    <p>A delicious burger with following ingridients:</p>
    <ul>
      {ingridientSummary}
    </ul>
    <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
    <p>Continue to checkout?</p>
    <Button btnType="Danger" clicked={props.cancelHandler}>CANCEL</Button>
    <Button btnType="Success" clicked={props.continueHandler}>CONTINUE</Button>
   </Aux>
 )
}

 export default orderSummary;
