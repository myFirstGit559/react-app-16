import React, { Component } from 'react';

// const withClass = (withClassComponent, className) => {
//   return (props) => (
//     <div className="className">
//       <withClassComponent {...props} />
//     </div>
//   )
// }

const withClass = (WithClassComponent, className) => {
  return class withClassC extends Component {
    render () {
      return(
        <div className={className}>
          <WithClassComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withClass;
