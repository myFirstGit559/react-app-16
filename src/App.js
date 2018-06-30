import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        persons: [
          {id: 0, name: "Tanya", age: 27},
          {id: 1, name: "Sigizmund", age: 36, hobby: "My hobby is dansing!"},
          {id: 2, name: "Sarah", age: 34}
        ]
      };
  }


  eventHandler(id, event) {
    const changePersons = this.state.persons;
    changePersons[id]['name'] = event.target.value;
    this.setState({
      persons: changePersons
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Task 1</h1>
        <h4>Output and Input:</h4>
        {this.state.persons.map((person) => {
          return (
            <div key={person.id} className="AppCard">
              <UserOutput username={person.name}/>
              <UserInput k={person.id} change={this.eventHandler.bind(this, person.id)} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
