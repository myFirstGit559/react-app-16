import React from 'react';

import BurgerIngredients from './BurgerIngridients/BurgerIngridients';

import classes from './Burger.css';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default burger;
