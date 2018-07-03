import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p>------------------------</p>
      <p onClick={props.click}> I am a person! My name is { props.name }. And I am { props.age } years old!</p>
      <p>{ props.children }</p>
      <input type="text" id={props.k} onChange={props.change} />
      <p><button onClick={props.del}>Delete Person</button></p>
    </div>
  )
}

export default person;
