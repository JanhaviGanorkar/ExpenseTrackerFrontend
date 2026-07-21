import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
    withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[Axios Error]', error?.config?.url, error?.response?.status, error?.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
