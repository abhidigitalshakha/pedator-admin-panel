import { useQuery, useMutation } from '@tanstack/react-query';
import { 
  getMentors,
  addMentorWithEmailPassword,
  addMentorWithMobilePassword,
  deleteMentorPermanently
} from '../api/mentorApi';

// ---------------------------- MENTOR QUERIES ----------------------------

// Fetch list of all mentors
export const useMentors = () => {
  return useQuery({
    queryKey: ['mentors'],
    queryFn: getMentors,
    onError: (error) => console.error('Error fetching mentors:', error.message),
  });
};

// ---------------------------- MENTOR MUTATIONS ----------------------------

// Add a mentor using email and password
export const useAddMentorWithEmailPassword = () => {
  return useMutation({
    mutationFn: addMentorWithEmailPassword,
    onSuccess: (data) => console.log('Mentor added successfully with email:', data),
    onError: (error) => console.error('Error adding mentor with email:', error.message),
  });
};

// Add a mentor using mobile and password
export const useAddMentorWithMobilePassword = () => {
  return useMutation({
    mutationFn: addMentorWithMobilePassword,
    onSuccess: (data) => console.log('Mentor added successfully with mobile:', data),
    onError: (error) => console.error('Error adding mentor with mobile:', error.message),
  });
};

// Delete a mentor permanently
export const useDeleteMentorPermanently = () => {
  return useMutation({
    mutationFn: deleteMentorPermanently,
    onSuccess: (data) => console.log('Mentor deleted successfully:', data),
    onError: (error) => console.error('Error deleting mentor permanently:', error.message),
  });
};
