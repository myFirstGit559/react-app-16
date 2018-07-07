import React from 'react';

import Aux from '../../../hoc/Aux';

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
    <p>Continue to checkout?</p>
   </Aux>
 )
}

 export default orderSummary;
