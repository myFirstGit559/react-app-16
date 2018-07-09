import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandeler = (WrapComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      }
    }

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    componentWillUnmount() {
      console.log('Will Unmount: ', this.reqInterceptor, this.resInterceptor);
      
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <Aux>
          {this.state.error && (
            <Modal
              show={this.state.error}
              modalClosed={this.errorConfirmedHandler}>
              {this.state.error.message}
            </Modal>
          )}
          <WrapComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandeler;
