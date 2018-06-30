import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const userInp = {
    backgroundColor: "#aaa",
    padding: "5px"
  };
  return (
    <div style={userInp} className="UserInput">
      <input type="text" id={props.k} onChange={props.change} />
    </div>
  )
}

export default userInput;
