
import axiosInstance from './axiosInstance';

// COUNTRY API FUNCTIONS

// Add Country
export const addCountry = async (countryData) => {
  try {
    const response = await axiosInstance.post('/api/v1/location/addCountry', countryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding country');
  }
};

// Get Countries
export const getCountries = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/location/getCountries');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching countries');
  }
};

// Update Country
export const updateCountry = async (countryId, countryData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/location/updateCountry/${countryId}`, countryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating country');
  }
};

// Delete Country
export const deleteCountry = async (countryId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/location/deleteCountry/${countryId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting country');
  }
};

// STATE API FUNCTIONS

// Add State
export const addState = async (stateData) => {
  try {
    const response = await axiosInstance.post('/api/v1/location/addState', stateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding state');
  }
};

// Get States
export const getStates = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/location/getStates');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching states');
  }
};

// Update State
export const updateState = async (stateId, stateData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/location/updateState/${stateId}`, stateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating state');
  }
};

// Delete State
export const deleteState = async (stateId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/location/deleteState/${stateId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting state');
  }
};

// CITY API FUNCTIONS

// Add City
export const addCity = async (cityData) => {
  try {
    const response = await axiosInstance.post('/api/v1/location/addCity', cityData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding city');
  }
};

// Get Cities
export const getCities = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/location/getCities');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching cities');
  }
};

// Update City
export const updateCity = async (cityId, cityData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/location/updateCity/${cityId}`, cityData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating city');
  }
};

// Delete City
export const deleteCity = async (cityId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/location/deleteCity/${cityId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting city');
  }
};
