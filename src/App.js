import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        persons: [
          {id: 0, name: "Tanya", age: 27},
          {id: 1, name: "Yaroslav", age: 36, hobby: "My hobby is tango danser!"},
          {id: 2, name: "Sarah", age: 34}
        ]
      };
  }


  switchNameHandler(id, newName) {
    let prsns = [
      {id: 0, name: "Tanya", age: 27},
      {id: 1, name: "Yaroslav", age: 36, hobby: "My hobby is tango danser!"},
      {id: 2, name: "Sarah", age: 34}
    ];
    prsns[id]['name'] = `not ${newName}`;
    this.setState({
      persons: prsns
    })
  }

  changeNameHandler = (event) => {
    let prsns = [
      {id: 0, name: "Tanya", age: 27},
      {id: 1, name: "Yaroslav", age: 36, hobby: "My hobby is tango danser!"},
      {id: 2, name: "Sarah", age: 34}
    ];
    prsns[event.target.id]['name'] = `not ${event.target.value}`;
    this.setState({
      persons: prsns
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I`m react app.</h1>
        <button onClick={this.switchNameHandler.bind(this, 0, 'Tanya')}>Switch Name</button>
        {
          this.state.persons.map((person) => {
            return (
              <Person
                key={person.id}
                k={person.id}
                name={person.name}
                age={person.age}
                click={this.switchNameHandler.bind(this, person.id, person.name)}
                change={this.changeNameHandler}>
                {person.hobby}</Person> )
          })
        }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m react app!!!') );
  }
}

export default App;
