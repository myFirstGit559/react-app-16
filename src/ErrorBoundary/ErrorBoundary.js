import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: ''
    }
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error.toString()
    })
  }

  render() {
    const error = {
      color: 'red'
    }
    if (this.state.hasError){
      return <h5 style={error}>{this.state.errorMessage}</h5>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
