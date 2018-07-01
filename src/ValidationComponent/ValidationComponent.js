import React from 'react';
import './ValidationComponent.css'

const validationComponent = (props) => {
  return (
    <div>
    {(props.length!==0) && (
      (props.length < 5)?
        <p className="error">Text too short</p>:
        <p className="valid">Text long enough</p>
    )}
    </div>
  )}

export default validationComponent;
