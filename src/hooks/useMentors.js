// src/hooks/useMentors.js

import { useQuery, useMutation } from 'react-query';
import { 
  getMentors,
  addMentorWithEmailPassword,
  addMentorWithMobilePassword,
  deleteMentorPermanently
} from '../api/mentorApi';

// Fetch list of all mentors
export const useMentors = () => {
  return useQuery('mentors', getMentors, {
    onError: (error) => {
      console.error('Error fetching mentors:', error.message);
    },
  });
};

// Add a mentor using email and password
export const useAddMentorWithEmailPassword = () => {
  return useMutation(addMentorWithEmailPassword, {
    onSuccess: (data) => {
      console.log('Mentor added successfully with email:', data);
    },
    onError: (error) => {
      console.error('Error adding mentor with email:', error.message);
    },
  });
};

// Add a mentor using mobile and password
export const useAddMentorWithMobilePassword = () => {
  return useMutation(addMentorWithMobilePassword, {
    onSuccess: (data) => {
      console.log('Mentor added successfully with mobile:', data);
    },
    onError: (error) => {
      console.error('Error adding mentor with mobile:', error.message);
    },
  });
};

// Delete a mentor permanently
export const useDeleteMentorPermanently = () => {
  return useMutation(deleteMentorPermanently, {
    onSuccess: (data) => {
      console.log('Mentor deleted successfully:', data);
    },
    onError: (error) => {
      console.error('Error deleting mentor permanently:', error.message);
    },
  });
};
