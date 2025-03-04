// src/api/courseApi.js
import axiosInstance from './axiosInstance';
import { APIS } from './sheet';

// COURSE CATEGORY API FUNCTIONS

// Add Course Category
export const addCourseCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post(APIS.COURSE_CATEGORY_ADD, categoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding course category');
  }
};

// Get Course Categories
export const getCourseCategories = async () => {
  try {
    const response = await axiosInstance.get(APIS.COURSE_CATEGORY_LIST);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching course categories');
  }
};

// Update Course Category
export const updateCourseCategory = async (categoryId, categoryData) => {
  try {
    const response = await axiosInstance.put(`${COURSE_CATEGORY_UPDATE}${categoryId}`, categoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating course category');
  }
};

// Delete Course Category
export const deleteCourseCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.delete(`${COURSE_CATEGORY_DELETE}${categoryId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting course category');
  }
};

// COURSE SUBCATEGORY API FUNCTIONS

// Add Course Subcategory
export const addCourseSubCategory = async (subCategoryData) => {
  try {
    const response = await axiosInstance.post(APIS.COURSE_SUB_CATEGORY_ADD, subCategoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding course subcategory');
  }
};

// Get Course Subcategories
export const getCourseSubCategories = async () => {
  try {
    const response = await axiosInstance.get(APIS.COURSE_SUB_CATEGORY_LIST);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching course subcategories');
  }
};

// Update Course Subcategory
export const updateCourseSubCategory = async (subCategoryId, subCategoryData) => {
  try {
    const response = await axiosInstance.put(`${COURSE_SUB_CATEGORY_UPDATE}${subCategoryId}`, subCategoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating course subcategory');
  }
};

// Delete Course Subcategory
export const deleteCourseSubCategory = async (subCategoryId) => {
  try {
    const response = await axiosInstance.delete(`${COURSE_SUB_CATEGORY_DELETE}${subCategoryId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting course subcategory');
  }
};

// COURSE API FUNCTIONS

// Add Course
export const addCourse = async (courseData) => {
  try {
    const response = await axiosInstance.post({COURSE_ADD}, courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error adding course');
  }
};

// Get Courses
export const getCourses = async () => {
  try {
    const response = await axiosInstance.get(APIS.COURSE_LIST);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error fetching courses');
  }
};

// Update Course
export const updateCourse = async (courseId, courseData) => {
  try {
    const response = await axiosInstance.put(`${APIS.COURSE_UPDATE}${courseId}`, courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error updating course');
  }
};

// Delete Course
export const deleteCourse = async (courseId) => {
  try {
    const response = await axiosInstance.delete(`${COURSE_DELETE}${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Error deleting course');
  }
};
