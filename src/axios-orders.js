import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolio-c3e85.firebaseio.com/'
});

export default instance;
