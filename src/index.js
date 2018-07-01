import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StyleRoot } from 'radium';

ReactDOM.render(
  <StyleRoot>
    <App />
  </StyleRoot>, document.getElementById('root'));
registerServiceWorker();
