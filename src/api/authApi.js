
import axiosInstance from './axiosInstance';
import { APIS } from './sheet';

// Admin Login API
export const adminLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post(APIS.ADMIN_LOGIN, credentials);
    return response.data;  // Return the response data (e.g., token, user info)
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};
