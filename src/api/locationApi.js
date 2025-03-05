
import axiosInstance from './axiosInstance';
import { APIS } from './sheet';

// COUNTRY API FUNCTIONS

// Add Country
export const addCountry = async (countryData) => {
  try {
    const response = await axiosInstance.post(APIS.COUNTRY_ADD, countryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding country');
  }
};

// Get Countries
export const getCountries = async () => {
  try {
    const response = await axiosInstance.get(APIS.COUNTRY_LIST);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching countries');
  }
};

// Update Country
export const updateCountry = async (countryId, countryData) => {
  try {
    const response = await axiosInstance.put(`${APIS.COUNTRY_UPDATE}${countryId}`, countryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating country');
  }
};

// Delete Country
export const deleteCountry = async (countryId) => {
  try {
    const response = await axiosInstance.delete(`${APIS.COUNTRY_DELETE}${countryId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting country');
  }
};

// STATE API FUNCTIONS

// Add State
export const addState = async (stateData) => {
  try {
    const response = await axiosInstance.post(APIS.STATE_ADD, stateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding state');
  }
};

// Get States
export const getStates = async () => {
  try {
    const response = await axiosInstance.get(APIS.STATE_LIST);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching states');
  }
};

// Update State
export const updateState = async (stateId, stateData) => {
  try {
    const response = await axiosInstance.put(`${APIS.STATE_UPDATE}${stateId}`, stateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating state');
  }
};

// Delete State
export const deleteState = async (stateId) => {
  try {
    const response = await axiosInstance.delete(`${APIS.STATE_DELETE}${stateId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting state');
  }
};

// CITY API FUNCTIONS

// Add City
export const addCity = async (cityData) => {
  try {
    const response = await axiosInstance.post(APIS.CITY_ADD, cityData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding city');
  }
};

// Get Cities
export const getCities = async () => {
  try {
    const response = await axiosInstance.get(APIS.CITY_LIST);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching cities');
  }
};

// Update City
export const updateCity = async (cityId, cityData) => {
  try {
    const response = await axiosInstance.put(`${APIS.CITY_UPDATE}${cityId}`, cityData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating city');
  }
};

// Delete City
export const deleteCity = async (cityId) => {
  try {
    const response = await axiosInstance.delete(`${APIS.CITY_DELETE}${cityId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting city');
  }
};
