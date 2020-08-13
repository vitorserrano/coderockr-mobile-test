import axios from 'axios';

const api = axios.create({
  baseURL: 'https://stormy-shelf-93141.herokuapp.com',
});

export default api;
