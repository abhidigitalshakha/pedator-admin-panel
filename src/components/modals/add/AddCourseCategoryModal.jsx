import React, { useState } from "react";

const AddCourseCategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({ ...categoryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(categoryData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Add Course Category</h2>
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Category Name */}
          <div>
            <p className="pb-2 text-gray-700">Category Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter Category Name"
              value={categoryData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <p className="pb-2 text-gray-700">Status</p>
            <select
              name="status"
              value={categoryData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseCategoryModal;
