import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

const person = (props) => {
  return (
    <Aux>
      <p>------------------------</p>
      <p onClick={props.click}> I am a person! My name is { props.name }. And I am { props.age } years old!</p>
      <p>{ props.children }</p>
      <input type="text" id={props.k} onChange={props.change} />
      <p><button onClick={props.del}>Delete Person</button></p>
    </Aux>
  )
}

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  k: PropTypes.number,
  change: PropTypes.func,
  del: PropTypes.func
}

export default withClass(person, classes.Person);
