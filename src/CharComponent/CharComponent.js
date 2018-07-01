import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
  return (
    <div className="char" onClick={props.click}>
      {props.letter}
    </div>
  )}

export default charComponent;
