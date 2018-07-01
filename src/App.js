import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: React.createRef(),
      textArray: [],
      length: 0
    }
  }

  handleChange = () => {
    let text = this.state.text.current.value;
    this.setState({
      length: text.length,
      textArray: text.split('')
    });
  }

  handleRemove(index, event) {
    this.state.textArray.splice(index,1);
    this.state.text.current.value = this.state.textArray.join('');
    this.setState({
      textArray: this.state.textArray,
      text: this.state.text,
      length: this.state.text.current.value.length
    });

  }

  render() {
    return (
      <div className="App">
        <label htmlFor="eText">Enter the text: </label>
        <input id="eText" type="text" ref={this.state.text} onChange={this.handleChange}/>
        <ValidationComponent length={this.state.length}/>
        {this.state.textArray.map((letter, index) =>
          <CharComponent key={index} letter={letter} click={this.handleRemove.bind(this, index)} />)}
      </div>
    );
  }
}

export default App;
