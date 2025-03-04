import { useQuery, useMutation } from '@tanstack/react-query';
import {
  addCountry,
  getCountries,
  updateCountry,
  deleteCountry,
  addState,
  getStates,
  updateState,
  deleteState,
  addCity,
  getCities,
  updateCity,
  deleteCity,
} from '../api/locationApi';

// ---------------------------- COUNTRY HOOKS ----------------------------

// Fetch list of countries
export const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
    onError: (error) => console.error('Error fetching countries:', error.message),
  });
};

// Add a country
export const useAddCountry = () => {
  return useMutation({
    mutationFn: addCountry,
    onSuccess: (data) => console.log('Country added successfully:', data),
    onError: (error) => console.error('Error adding country:', error.message),
  });
};

// Update a country
export const useUpdateCountry = () => {
  return useMutation({
    mutationFn: updateCountry,
    onSuccess: (data) => console.log('Country updated successfully:', data),
    onError: (error) => console.error('Error updating country:', error.message),
  });
};

// Delete a country
export const useDeleteCountry = () => {
  return useMutation({
    mutationFn: deleteCountry,
    onSuccess: (data) => console.log('Country deleted successfully:', data),
    onError: (error) => console.error('Error deleting country:', error.message),
  });
};

// ---------------------------- STATE HOOKS ----------------------------

// Fetch list of states
export const useStates = () => {
  return useQuery({
    queryKey: ['states'],
    queryFn: getStates,
    onError: (error) => console.error('Error fetching states:', error.message),
  });
};

// Add a state
export const useAddState = () => {
  return useMutation({
    mutationFn: addState,
    onSuccess: (data) => console.log('State added successfully:', data),
    onError: (error) => console.error('Error adding state:', error.message),
  });
};

// Update a state
export const useUpdateState = () => {
  return useMutation({
    mutationFn: updateState,
    onSuccess: (data) => console.log('State updated successfully:', data),
    onError: (error) => console.error('Error updating state:', error.message),
  });
};

// Delete a state
export const useDeleteState = () => {
  return useMutation({
    mutationFn: deleteState,
    onSuccess: (data) => console.log('State deleted successfully:', data),
    onError: (error) => console.error('Error deleting state:', error.message),
  });
};

// ---------------------------- CITY HOOKS ----------------------------

// Fetch list of cities
export const useCities = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
    onError: (error) => console.error('Error fetching cities:', error.message),
  });
};

// Add a city
export const useAddCity = () => {
  return useMutation({
    mutationFn: addCity,
    onSuccess: (data) => console.log('City added successfully:', data),
    onError: (error) => console.error('Error adding city:', error.message),
  });
};

// Update a city
export const useUpdateCity = () => {
  return useMutation({
    mutationFn: updateCity,
    onSuccess: (data) => console.log('City updated successfully:', data),
    onError: (error) => console.error('Error updating city:', error.message),
  });
};

// Delete a city
export const useDeleteCity = () => {
  return useMutation({
    mutationFn: deleteCity,
    onSuccess: (data) => console.log('City deleted successfully:', data),
    onError: (error) => console.error('Error deleting city:', error.message),
  });
};
