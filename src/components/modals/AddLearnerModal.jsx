import React, { useState } from "react";

const AddLearnerModal = ({ isOpen, onClose, onSubmit }) => {
  const [learnerData, setLearnerData] = useState({
    name: "",
    contactNumber: "",
    password: "",
    status: true,
    age: "",
    gender: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLearnerData({ ...learnerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(learnerData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Add Learner</h2>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-4">
          {/* Name */}
          <div>
            <p className="pb-2 text-gray-700">Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={learnerData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <p className="pb-2 text-gray-700">Contact Number</p>
            <input
              type="number"
              name="contactNumber"
              placeholder="Enter Contact Number"
              value={learnerData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div>
            <p className="pb-2 text-gray-700">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={learnerData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Status */}

          {/* Age */}
          <div>
            <p className="pb-2 text-gray-700">Age</p>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={learnerData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <p className="pb-2 text-gray-700">Gender</p>
            <select
              name="gender"
              value={learnerData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Others</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <p className="pb-2 text-gray-700">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={learnerData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Add Learner
            </button>
          </div>
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={learnerData.status}
                onChange={() =>
                  setLearnerData({ ...learnerData, status: !learnerData.status })
                }
              />
              <span>{learnerData.status ? "Active" : "Inactive"}</span>
            </label>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddLearnerModal;
