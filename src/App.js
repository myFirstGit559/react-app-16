import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.constantPersons = [
      {id: 0, name: "Tanya", age: 27},
      {id: 1, name: "Sigizmund", age: 36, hobby: "My hobby is dansing!"},
      {id: 2, name: "Sarah", age: 34}
    ];
    this.state = {
        persons: this.constantPersons,
        showPersons: false
      };
  }


  switchNameHandler() {
    if (this.state.persons.length) {
      let prsns = [...this.state.persons];
      let id = prompt('Enter number from 1 to 3');
      if (id > 0 && id < 4) {
        let newName = prompt('Enter new Name:');
        if (newName) {
          prsns[(id - 1)]['name'] = newName;
          this.setState({
            persons: prsns,
            showPersons: true
          })
        } else {
          alert("Name can't be empty field!");
          this.switchNameHandler();
        }
      } else {
        this.switchNameHandler();
      }

    } else {
      this.setState({
        persons: this.constantPersons
      })
    }

  }

  deletePersonHandler(id, event) {
    let prsns = this.state.persons.slice();//copy array not ref
    prsns.splice(id,1);
    //prsns = prsns.filter((person) => person.id!==id);
    this.setState({
      persons: prsns
    })
  }

  changeNameHandler(id, event){
    let prsns = [...this.state.persons];//the other way to copy array not ref
    prsns[id]['name'] = `not ${event.target.value}`;
    this.setState({
      persons: prsns
    })
  }

  togglePersons = () => {
    const toggleP = this.state.showPersons?false:true;

    this.setState({
      showPersons: toggleP
    })
  }

  personsContent = () => {
    return (<div>
        <button onClick={this.switchNameHandler.bind(this)}>Switch Name</button>
      {
        this.state.persons.map((person,index) => {
          return (
            <div key={index}>
              <ErrorBoundary>
                <Person
                  key={index}
                  k={index}
                  name={person.name}
                  age={person.age}
                  click={this.switchNameHandler.bind(this, index, person.name)}
                  change={this.changeNameHandler.bind(this, index)}
                  del={this.deletePersonHandler.bind(this, index)}
                  >
                  {person.hobby}</Person>
                </ErrorBoundary>
            </div>
            )
        })
      }
      </div>);
  }

  render() {
  const toggleClass = (this.state.showPersons)? `${classes.toggleButton} ${classes.toggleActive}`: classes.toggleButton;
    return (
        <div className={classes.App}>
          <h1>Hi, I`m react app.</h1>
          <button className={toggleClass} onClick={this.togglePersons}>Toggle Persons</button>
          {this.state.showPersons &&
            this.personsContent()
          }
        </div>
    );
  }
}

export default App;
