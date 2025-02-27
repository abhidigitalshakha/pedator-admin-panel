
import axiosInstance from './axiosInstance';

// Admin Login API
export const adminLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post('/api/v1/admin/login', credentials);
    return response.data;  // Return the response data (e.g., token, user info)
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};
