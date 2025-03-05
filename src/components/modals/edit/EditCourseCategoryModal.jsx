import React, { useState, useEffect } from "react";

const EditCourseCategoryModal = ({ isOpen, onClose, onSubmit, categoryData }) => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    status: "active",
  });

  // Populate form when modal opens with selected category data
  useEffect(() => {
    if (categoryData) {
      setFormData({
        name: categoryData.name || "",
        id: categoryData.id || "",
        status: categoryData.status || "active",
      });
    }
  }, [categoryData]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: formData.name, status: formData.status }); // Send only updatable fields
    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Edit Course Category</h2>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Category ID (Read-Only) */}
          <div>
            <p className="pb-2 text-gray-700">Category ID</p>
            <input
              type="text"
              name="id"
              value={formData.id}
              readOnly
              className="w-full p-2 border rounded border-gray-400 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Category Name (Editable) */}
          <div>
            <p className="pb-2 text-gray-700">Category Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter Category Name"
              value={formData.name}
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
              value={formData.status}
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
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseCategoryModal;
