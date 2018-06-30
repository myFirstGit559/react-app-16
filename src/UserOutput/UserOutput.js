import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.username}</p>
      <p>Compare it with my solution (video + downloadable files) thereafter.</p>
    </div>
  )
}

export default userOutput;
