import React, { useState, useEffect } from "react";

const EditCountryModal = ({ isOpen, onClose, onSubmit, countryData }) => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    status: true,
  });

  // Populate form when modal opens with selected country data
  useEffect(() => {
    if (countryData) {
      setFormData({
        name: countryData.name || "",
        code: countryData.code || "",
        status: countryData.status ?? true, // Ensure boolean value
      });
    }
  }, [countryData]);

  // Handle input changes (only for editable fields)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle status
  const handleStatusToggle = () => {
    setFormData({ ...formData, status: !formData.status });
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
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Edit Country</h2>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Country Code (Read-Only) */}
          <div>
            <p className="pb-2 text-gray-700">Country Code (ID)</p>
            <input
              type="text"
              name="code"
              value={formData.code}
              readOnly
              className="w-full p-2 border rounded border-gray-400 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Country Name (Editable) */}
          <div>
            <p className="pb-2 text-gray-700">Country Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter Country Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Status Toggle */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.status}
              onChange={handleStatusToggle}
            />
            <span>{formData.status ? "Active" : "Inactive"}</span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Update Country
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCountryModal;
