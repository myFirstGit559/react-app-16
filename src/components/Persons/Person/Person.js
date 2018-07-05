import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
  }

  componentDidMount() {
    console.log('[Person.js] componentDidMount(): ', arguments);

    if(this.props.k === 1) {
      this.inputElement.current.focus();
    }
  }

  render() {
    return (
      <Aux>
        <p>------------------------</p>
        <AuthContext.Consumer>
          { auth => auth ? <p>authenticated</p> : null }
        </AuthContext.Consumer>
        <p onClick={this.props.click}> I am a person! My name is { this.props.name }. And I am { this.props.age } years old!</p>
        <p>{ this.props.children }</p>
        <input
          ref={this.inputElement}
          type="text"
          id={this.props.k}
          onChange={this.props.change} />
        <p><button onClick={this.props.del}>Delete Person</button></p>
      </Aux>
  )}
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  k: PropTypes.number,
  change: PropTypes.func,
  del: PropTypes.func
}

export default withClass(Person, classes.Person);
