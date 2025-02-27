// src/api/mentorApi.js

import axiosInstance from './axiosInstance';

// Fetch list of all mentors
export const getMentors = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/mentor/all');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching mentors');
  }
};

// Add a mentor using email and password
export const addMentorWithEmailPassword = async (mentorData) => {
  try {
    const response = await axiosInstance.post('/api/v1/mentor/register/email', mentorData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding mentor with email');
  }
};

// Add a mentor using mobile and password
export const addMentorWithMobilePassword = async (mentorData) => {
  try {
    const response = await axiosInstance.post('/api/v1/mentor/register/mobile', mentorData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding mentor with mobile');
  }
};

// Permanently delete a mentor
export const deleteMentorPermanently = async (mentorId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/mentor/delete/${mentorId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting mentor permanently');
  }
};
