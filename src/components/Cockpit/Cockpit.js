import React from 'react';

import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  return (
    <Aux>
      <h1>Hi, I`m react app.</h1>
      <button className={props.classToggle} onClick={props.toggle}>Toggle Persons</button>
      <p>
        <button onClick={props.login}>Log In</button>
      </p>
    </Aux>
  )
}
export default cockpit;
