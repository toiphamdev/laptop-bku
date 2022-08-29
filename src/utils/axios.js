import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://backend-shop-laptop.herokuapp.com',
});
instance.interceptors.response.use((response) => {
  return response.data;
});
export default instance;
