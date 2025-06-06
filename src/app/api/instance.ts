import axios from 'axios';

// export const API_URL = 'http://localhost:8000/api';
// для тестирования
export const API_URL = 'http://localhost:8000/api';

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
