import { API_BASE_LINK } from './baseUrl';
import axios from 'axios';

// Set the base URL for your API
const axiosInstance = axios.create({
  baseURL: API_BASE_LINK,  // API base URL
  timeout: 10000, // duration for API requests
});

// Optional: Request and Response Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // add headers here, such as for authentication
    const token = JSON.parse(localStorage.getItem('token')); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response, // Directly return the response
  (error) => {
    if (error.response && error.response.status === 401 && error.response.status === 403) {
      // Token expired or unauthorized access
      localStorage.removeItem('token'); 
      localStorage.removeItem('user');  

      // Redirect to login page
      window.location.href = "/login"; 
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
