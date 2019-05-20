import axios from 'axios';
import { getAuthToken } from 'helpers/auth';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
instance.interceptors.request.use(config => {
  const token = getAuthToken();
  config.headers['x-access-token'] = token;
  return config;
});

export default instance;
