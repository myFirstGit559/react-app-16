import React from 'react';

import BurgerIngredients from './BurgerIngridients/BurgerIngridients';

import classes from './Burger.css';

const burger = (props) => {
  //console.log('props:', props);
  let transformedIngridients = Object.keys(props.ingridients)
  .map(igKey => {
    //console.log(igKey, [...Array(props.ingridients[igKey])]);
    return [...Array(props.ingridients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  //console.log(transformedIngridients);
  if (transformedIngridients.length === 0) {
    transformedIngridients = <p>Start adding ingridients.</p>;
  }

  return (
    <div className={classes.Burger}>

      <BurgerIngredients type="bread-top" />
      {transformedIngridients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default burger;
