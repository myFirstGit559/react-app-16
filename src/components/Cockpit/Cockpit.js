import React from 'react';
const Cockpit = (props) => {
  return (
    <div>
      <h1>Hi, I`m react app.</h1>
      <button className={props.classToggle} onClick={props.toggle}>Toggle Persons</button>
    </div>
  )
}
export default Cockpit;
