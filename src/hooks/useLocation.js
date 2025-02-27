// src/hooks/useLocation.js

import { useQuery, useMutation } from 'react-query';
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

// COUNTRY FUNCTIONS

// Fetch list of countries
export const useCountries = () => {
  return useQuery('countries', getCountries, {
    onError: (error) => {
      console.error('Error fetching countries:', error.message);
    },
  });
};

// Add a country
export const useAddCountry = () => {
  return useMutation(addCountry, {
    onSuccess: (data) => {
      console.log('Country added successfully:', data);
    },
    onError: (error) => {
      console.error('Error adding country:', error.message);
    },
  });
};

// Update a country
export const useUpdateCountry = () => {
  return useMutation(updateCountry, {
    onSuccess: (data) => {
      console.log('Country updated successfully:', data);
    },
    onError: (error) => {
      console.error('Error updating country:', error.message);
    },
  });
};

// Delete a country
export const useDeleteCountry = () => {
  return useMutation(deleteCountry, {
    onSuccess: (data) => {
      console.log('Country deleted successfully:', data);
    },
    onError: (error) => {
      console.error('Error deleting country:', error.message);
    },
  });
};

// STATE FUNCTIONS

// Fetch list of states
export const useStates = () => {
  return useQuery('states', getStates, {
    onError: (error) => {
      console.error('Error fetching states:', error.message);
    },
  });
};

// Add a state
export const useAddState = () => {
  return useMutation(addState, {
    onSuccess: (data) => {
      console.log('State added successfully:', data);
    },
    onError: (error) => {
      console.error('Error adding state:', error.message);
    },
  });
};

// Update a state
export const useUpdateState = () => {
  return useMutation(updateState, {
    onSuccess: (data) => {
      console.log('State updated successfully:', data);
    },
    onError: (error) => {
      console.error('Error updating state:', error.message);
    },
  });
};

// Delete a state
export const useDeleteState = () => {
  return useMutation(deleteState, {
    onSuccess: (data) => {
      console.log('State deleted successfully:', data);
    },
    onError: (error) => {
      console.error('Error deleting state:', error.message);
    },
  });
};

// CITY FUNCTIONS

// Fetch list of cities
export const useCities = () => {
  return useQuery('cities', getCities, {
    onError: (error) => {
      console.error('Error fetching cities:', error.message);
    },
  });
};

// Add a city
export const useAddCity = () => {
  return useMutation(addCity, {
    onSuccess: (data) => {
      console.log('City added successfully:', data);
    },
    onError: (error) => {
      console.error('Error adding city:', error.message);
    },
  });
};

// Update a city
export const useUpdateCity = () => {
  return useMutation(updateCity, {
    onSuccess: (data) => {
      console.log('City updated successfully:', data);
    },
    onError: (error) => {
      console.error('Error updating city:', error.message);
    },
  });
};

// Delete a city
export const useDeleteCity = () => {
  return useMutation(deleteCity, {
    onSuccess: (data) => {
      console.log('City deleted successfully:', data);
    },
    onError: (error) => {
      console.error('Error deleting city:', error.message);
    },
  });
};
