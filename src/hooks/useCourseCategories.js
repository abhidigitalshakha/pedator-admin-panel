import { useQuery, useMutation } from '@tanstack/react-query';
import {
  addCourseCategory,
  getCourseCategories,
  updateCourseCategory,
  deleteCourseCategory,
  addCourseSubCategory,
  getCourseSubCategories,
  updateCourseSubCategory,
  deleteCourseSubCategory,
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse
} from '../api/courseApi';

// ---------------------------- COURSE CATEGORY HOOKS ----------------------------

// Fetch list of course categories
export const useCourseCategories = () => {
  return useQuery({
    queryKey: ['courseCategories'],
    queryFn: getCourseCategories,
    onError: (error) => console.error('Error fetching course categories:', error.message),
  });
};

// Add a course category
export const useAddCourseCategory = () => {
  return useMutation({
    mutationFn: addCourseCategory,
    onSuccess: (data) => console.log('Course category added successfully:', data),
    onError: (error) => console.error('Error adding course category:', error.message),
  });
};

// Update a course category
export const useUpdateCourseCategory = () => {
  return useMutation({
    mutationFn: updateCourseCategory,
    onSuccess: (data) => console.log('Course category updated successfully:', data),
    onError: (error) => console.error('Error updating course category:', error.message),
  });
};

// Delete a course category
export const useDeleteCourseCategory = () => {
  return useMutation({
    mutationFn: deleteCourseCategory,
    onSuccess: (data) => console.log('Course category deleted successfully:', data),
    onError: (error) => console.error('Error deleting course category:', error.message),
  });
};

// ---------------------------- COURSE SUBCATEGORY HOOKS ----------------------------

// Fetch list of course subcategories
export const useCourseSubCategories = () => {
  return useQuery({
    queryKey: ['courseSubCategories'],
    queryFn: getCourseSubCategories,
    onError: (error) => console.error('Error fetching course subcategories:', error.message),
  });
};

// Add a course subcategory
export const useAddCourseSubCategory = () => {
  return useMutation({
    mutationFn: addCourseSubCategory,
    onSuccess: (data) => console.log('Course subcategory added successfully:', data),
    onError: (error) => console.error('Error adding course subcategory:', error.message),
  });
};

// Update a course subcategory
export const useUpdateCourseSubCategory = () => {
  return useMutation({
    mutationFn: updateCourseSubCategory,
    onSuccess: (data) => console.log('Course subcategory updated successfully:', data),
    onError: (error) => console.error('Error updating course subcategory:', error.message),
  });
};

// Delete a course subcategory
export const useDeleteCourseSubCategory = () => {
  return useMutation({
    mutationFn: deleteCourseSubCategory,
    onSuccess: (data) => console.log('Course subcategory deleted successfully:', data),
    onError: (error) => console.error('Error deleting course subcategory:', error.message),
  });
};

// ---------------------------- COURSE HOOKS ----------------------------

// Fetch list of courses
export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: getCourses,
    onError: (error) => console.error('Error fetching courses:', error.message),
  });
};

// Add a course
export const useAddCourse = () => {
  return useMutation({
    mutationFn: addCourse,
    onSuccess: (data) => console.log('Course added successfully:', data),
    onError: (error) => console.error('Error adding course:', error.message),
  });
};

// Update a course
export const useUpdateCourse = () => {
  return useMutation({
    mutationFn: updateCourse,
    onSuccess: (data) => console.log('Course updated successfully:', data),
    onError: (error) => console.error('Error updating course:', error.message),
  });
};

// Delete a course
export const useDeleteCourse = () => {
  return useMutation({
    mutationFn: deleteCourse,
    onSuccess: (data) => console.log('Course deleted successfully:', data),
    onError: (error) => console.error('Error deleting course:', error.message),
  });
};
