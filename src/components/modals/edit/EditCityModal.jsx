import React, { useState, useEffect } from "react";

const EditCityModal = ({ isOpen, onClose, onSubmit, cityData, countries, states }) => {
    console.log(cityData);
    
  const [formData, setFormData] = useState({
    countryId: "",
    stateId: "",
    cityName: "",
    status: true,
  });

  useEffect(() => {
    if (cityData && Object.keys(cityData).length > 0) {
      setFormData({
        countryId: cityData.countryId || "",
        stateId: cityData.stateId || "",
        cityName: cityData.name || "",
        status: cityData.status ?? false,  // Ensure boolean values are properly handled
      });
    }
  }, [cityData]);

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
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Edit City</h2>
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

          {/* State Dropdown */}
          <div>
            <p className="pb-2 text-gray-700">State</p>
            <select
              name="stateId"
              value={formData.stateId}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            >
              <option value="">Select State</option>
              {states
                .filter((state) => state.countryId === formData.countryId)
                .map((state) => (
                  <option key={state._id} value={state._id}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>

          {/* City Name */}
          <div>
            <p className="pb-2 text-gray-700">City Name</p>
            <input
              type="text"
              name="cityName"
              placeholder="Enter City Name"
              value={formData.cityName}
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
              Update City
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCityModal;
