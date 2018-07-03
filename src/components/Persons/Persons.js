import React, { Component } from 'react';

import Person from './Person/Person';

const Persons = (props) => {
    return (<div>
        <button onClick={props.switch}>Switch Name</button>
      {
        props.persons.map((person,index) => {
          return (
            <div key={index}>
                <Person
                  key={index}
                  k={index}
                  name={person.name}
                  age={person.age}
                  click={() => props.switch(index, person.name)}
                  change={(event) => props.change(index, event)}
                  del={(event) => props.delInd(index, event)}
                  >
                  {person.hobby}</Person>
            </div>
            )
        })
      }
      </div>);
}

export default Persons;
