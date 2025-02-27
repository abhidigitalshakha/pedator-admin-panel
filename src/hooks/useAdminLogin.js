// src/hooks/useAdminLogin.js

import { useMutation } from 'react-query';
import { adminLogin } from '../api/authApi';

// Admin Login Hook using React Query's useMutation
export const useAdminLogin = () => {
    return useMutation(
        async (credentials) => {
            return await adminLogin(credentials);
        },
        { 
            onSuccess: (data) => {
                console.log('Login successful:', data);
                // navigate('/dashboard')
                localStorage.setItem('user', JSON.stringify(RESPONSE?.user))
                localStorage.setItem('token', RESPONSE?.token)
            },
            onError: (error) => {
                console.error('Login failed:', error.message);
            }
        }
    );
};
