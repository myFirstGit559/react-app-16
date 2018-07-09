import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-a4b7b.firebaseio.com/'
});

export default instance;
