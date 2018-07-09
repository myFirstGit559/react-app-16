import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

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
      ingridients: null,
      totalPrice: 2,
      purchaseable: false,
      purchaising: false,
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    axios.get('/ingridients.json')
      .then(response => {
        this.setState({ingridients: response.data, error: false})
      })
      .catch(error => {
        console.log('error: ', error);
        this.setState({error: true});
      })
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

  purchaiseContinueHandler = () => {
    this.setState({loading: true, purchaising: true});
    const order = {
      ingridients: this.state.ingridients,
      totalPrice: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Tanya Agisheva',
        address: {
          street: 'Bakinskaya',
          zipCode: '220007',
          country: 'Belarus'
        },
        email: 'teast@test.gmail.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        console.log('resp: ', response);
        this.setState({loading: false, purchaising: false});
        //this.setState({purchaising: false});
      })
      .catch(error => {
        console.log('error: ', error);
        this.setState({loading: false, purchaising: false});
      })
  }

  render() {
    let disabledIngredients = {
      ...this.state.ingridients
    }
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    let OrderSumm = null;
    if (this.state.loading) {
      OrderSumm = <Spinner />
    }
    let burger = this.state.error ?
    <p style={{color: 'red', textAlign: 'center', marginTop: '30%'}}>`Server Error. Ingridients can't be loaded.`</p>
    :<Spinner />;
    if (this.state.ingridients) {
      OrderSumm = <OrderSummary
                      ingridients={this.state.ingridients}
                      continueHandler={this.purchaiseContinueHandler}
                      cancelHandler={this.purchaiseCancelHandler}
                      totalPrice={this.state.totalPrice}/>
      burger = (
        <Aux>
          <Burger ingridients={this.state.ingridients} />
          <BuildControls
            price={this.state.totalPrice}
            addIngridient={this.addIngridientHandler}
            removeIngridient={this.removeIngridientHandler}
            purchaseable={this.state.purchaseable}
            disabledOn={disabledIngredients}
            ordered={this.purchaiseHandler}/>
        </Aux>);
    }
    return (
      <Aux>
        <Modal show={this.state.purchaising} modalClosed={this.purchaiseCancelHandler}>
          {OrderSumm}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);
