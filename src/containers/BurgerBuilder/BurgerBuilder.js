import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Modal from '../../components/UI/Modal/Modal';

const INGRIDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingridients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 2,
      purchaseable: false,
      purchaising: false
    }
  }

  addIngridientHandler = (type) => {
    let oldCount = this.state.ingridients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingridients
    };
    updatedIngredients[type] = updatedCount;

    const newPrice = this.state.totalPrice + INGRIDIENT_PRICES[type];

    this.setState({
      ingridients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngridientHandler = (type) => {
    let oldCount = this.state.ingridients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingridients
    };
    updatedIngredients[type] = updatedCount;

    const newPrice = this.state.totalPrice - INGRIDIENT_PRICES[type];

    this.setState({
      ingridients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  updatePurchaseState(ingridients) {
    // const ingridients = {
    //   ...this.state.ingridients
    // };
    const sum = Object.keys(ingridients)
    .map(igKey => {
      return ingridients[igKey];
    })
    .reduce((sum, el) => sum + el, 0);
    this.setState({
      purchaseable: sum > 0
    })
  }

  purchaiseHandler = () => {
    this.setState({purchaising: true});
  }

  purchaiseCancelHandler = () => {
    this.setState({purchaising: false});
  }

  render() {
    let disabledIngredients = {
      ...this.state.ingridients
    }
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <Modal show={this.state.purchaising} modalClosed={this.purchaiseCancelHandler}>
          <OrderSummary ingridients={this.state.ingridients}/>
        </Modal>
        <BuildControls
          price={this.state.totalPrice}
          addIngridient={this.addIngridientHandler}
          removeIngridient={this.removeIngridientHandler}
          purchaseable={this.state.purchaseable}
          disabledOn={disabledIngredients}
          ordered={this.purchaiseHandler}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;
