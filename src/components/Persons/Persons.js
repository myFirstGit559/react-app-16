import React, { Component, PureComponent } from 'react';

//PureComponent compare previous and current state in shouldComponentUpdate
//allow changes if they are different

import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);

    console.log('[Persons.js] constructor: ', props);
  }

  componentWillReceiveProps() {
    console.log('[Persons.js] componentWillReceiveProps(): ', this.props, arguments);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate(): ', 'nextProps: ', nextProps, 'nextState: ', nextState);

    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate(): ', 'prevProps: ', prevProps, 'prevState: ', prevState, 'snapshot: ', snapshot);
  }

  render() {
    console.log('[Persons.js] render.');
    return (<div>
        <button onClick={this.props.switch}>Switch Name</button>
      {
        this.props.persons.map((person,index) => {
          return (
            <div key={index}>
                <Person
                  key={index}
                  k={index}
                  name={person.name}
                  age={person.age}
                  click={() => this.props.switch(index, person.name)}
                  change={(event) => this.props.change(index, event)}
                  del={(event) => this.props.delInd(index, event)}
                  >
                  {person.hobby}</Person>
            </div>
            )
        })
      }
      </div>);
  }

}

export default Persons;
