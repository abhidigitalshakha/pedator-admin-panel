import { API_BASE_LINK } from './baseUrl';
import axios from 'axios';

// Set the base URL for your API
const axiosInstance = axios.create({
  baseURL: API_BASE_LINK,  // Update this with your API base URL
  timeout: 10000, // Set timeout duration for API requests
});

// Optional: Request and Response Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add headers here, such as for authentication
    const token = localStorage.getItem('token');  // Assuming token is stored in localStorage
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
    // You can add global error handling here (e.g., showing an alert)
    return Promise.reject(error);
  }
);

export default axiosInstance;
