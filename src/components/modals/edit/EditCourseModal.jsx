import React, { useState, useEffect } from "react";

const EditCourseModal = ({ isOpen, onClose, courseData, onUpdate }) => {
  const [updatedCourse, setUpdatedCourse] = useState({
    courseName: "",
    category: "",
    price: "",
    duration: "",
    instructor: "",
    status: true,
  });

  useEffect(() => {
    if (courseData) {
      setUpdatedCourse(courseData);
    }
  }, [courseData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse({ ...updatedCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedCourse);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Edit Course</h2>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-4">
          {/* Course Name */}
          <div>
            <p className="pb-2 text-gray-700">Course Name</p>
            <input
              type="text"
              name="courseName"
              placeholder="Enter Course Name"
              value={updatedCourse.courseName}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Category */}
          <div>
            <p className="pb-2 text-gray-700">Category</p>
            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              value={updatedCourse.category}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Price */}
          <div>
            <p className="pb-2 text-gray-700">Price ($)</p>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={updatedCourse.price}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <p className="pb-2 text-gray-700">Duration (weeks)</p>
            <input
              type="number"
              name="duration"
              placeholder="Enter Duration"
              value={updatedCourse.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Instructor */}
          <div>
            <p className="pb-2 text-gray-700">Instructor</p>
            <input
              type="text"
              name="instructor"
              placeholder="Enter Instructor Name"
              value={updatedCourse.instructor}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Status Toggle */}
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={updatedCourse.status}
                onChange={() =>
                  setUpdatedCourse({ ...updatedCourse, status: !updatedCourse.status })
                }
              />
              <span>{updatedCourse.status ? "Active" : "Inactive"}</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseModal;
