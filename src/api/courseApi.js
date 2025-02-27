// src/api/courseApi.js
import axiosInstance from './axiosInstance';

// COURSE CATEGORY API FUNCTIONS

// Add Course Category
export const addCourseCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post('/api/v1/course/courseCategory/add', categoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding course category');
  }
};

// Get Course Categories
export const getCourseCategories = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/course/courseCategory/all');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching course categories');
  }
};

// Update Course Category
export const updateCourseCategory = async (categoryId, categoryData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/course/courseCategory/update/${categoryId}`, categoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating course category');
  }
};

// Delete Course Category
export const deleteCourseCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/course/courseCategory/delete/${categoryId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting course category');
  }
};

// COURSE SUBCATEGORY API FUNCTIONS

// Add Course Subcategory
export const addCourseSubCategory = async (subCategoryData) => {
  try {
    const response = await axiosInstance.post('/api/v1/course/courseSubCategory/add', subCategoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding course subcategory');
  }
};

// Get Course Subcategories
export const getCourseSubCategories = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/course/courseSubCategory/all');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching course subcategories');
  }
};

// Update Course Subcategory
export const updateCourseSubCategory = async (subCategoryId, subCategoryData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/course/courseSubCategory/update/${subCategoryId}`, subCategoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating course subcategory');
  }
};

// Delete Course Subcategory
export const deleteCourseSubCategory = async (subCategoryId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/course/courseSubCategory/delete/${subCategoryId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting course subcategory');
  }
};

// COURSE API FUNCTIONS

// Add Course
export const addCourse = async (courseData) => {
  try {
    const response = await axiosInstance.post('/api/v1/course/add', courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding course');
  }
};

// Get Courses
export const getCourses = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/course/all');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching courses');
  }
};

// Update Course
export const updateCourse = async (courseId, courseData) => {
  try {
    const response = await axiosInstance.put(`/api/v1/course/update/${courseId}`, courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating course');
  }
};

// Delete Course
export const deleteCourse = async (courseId) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/course/delete/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting course');
  }
};
