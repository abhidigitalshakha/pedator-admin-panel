import React, { useState, useEffect } from "react";

const EditStateModal = ({ isOpen, onClose, onSubmit, stateData, countries }) => {
    console.log(stateData);
    
  const [formData, setFormData] = useState({
    countryId: "",
    stateName: "",
    status: true,
  });

  useEffect(() => {
    if (stateData && Object.keys(stateData).length > 0) {
      setFormData({
        countryId: stateData.countryId || "",
        stateName: stateData.name || "",
        status: stateData.status ?? false, // Ensure boolean values are handled correctly
      });
    }
  }, [stateData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Edit State</h2>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Country Dropdown */}
          <div>
            <p className="pb-2 text-gray-700">Country</p>
            <select
              name="countryId"
              value={formData.countryId}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country._id} value={country._id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* State Name */}
          <div>
            <p className="pb-2 text-gray-700">State Name</p>
            <input
              type="text"
              name="stateName"
              placeholder="Enter State Name"
              value={formData.stateName}
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
              onChange={() =>
                setFormData({ ...formData, status: !formData.status })
              }
            />
            <span>{formData.status ? "Active" : "Inactive"}</span>
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Update State
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStateModal;
