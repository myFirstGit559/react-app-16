import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use(
  request => {
    console.log('request configuration: ', request);
    return request;},
  error => {
    console.log('catch error: ', error);
    return Promise.reject(error);
  });

const responseInterceptor = axios.interceptors.response.use(
  response => {
    console.log('response configuration: ', response);
    return response;},
  error => {
    console.log('catch error: ', error);
    return Promise.reject(error);
  });

setTimeout(() => {
  axios.interceptors.request.eject(requestInterceptor);
  axios.interceptors.response.eject(responseInterceptor);
}, 1000);


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
