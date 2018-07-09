import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  componentDidMount() {
    //to test unmount interceptors
    // setTimeout(() => {
    //   this.setState({show: false})
    // }, 5000);
  }

  render() {
    return (
      <Layout>
        {this.state.show ? <BurgerBuilder /> : null}
      </Layout>
    );
  }
}

export default App;
