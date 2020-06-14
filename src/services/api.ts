import axios from 'axios';

const username = process.env.BROKER_USERNAME ? process.env.BROKER_USERNAME : '';
const password = process.env.BROKER_PASSWORD ? process.env.BROKER_PASSWORD : '';

console.log(username);
console.log(password);

const api = axios.create({
  baseURL: 'https://broker.shiftr.io',
  auth: { username, password },
});

export default api;
