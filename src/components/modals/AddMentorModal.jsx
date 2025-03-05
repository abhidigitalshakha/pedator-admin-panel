import React, { useState } from "react";

const AddMentorModal = ({ isOpen, onClose, onSubmit }) => {
  const [mentorData, setMentorData] = useState({
    username: "",
    registrationType: "",
    email: "",
    mobileNumber: "",
    password: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorData({ ...mentorData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(mentorData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Register Mentor</h2>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-4">
          {/* Username */}
          <div>
            <p className="pb-2 text-gray-700">Username</p>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={mentorData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Registration Type */}
          <div>
            <p className="pb-2 text-gray-700">Registration Type</p>
            <select
              name="registrationType"
              value={mentorData.registrationType}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            >
              <option value="">Select Registration Type</option>
              <option value="emailPassword">Email & Password</option>
              <option value="mobilePassword">Mobile & Password</option>
            </select>
          </div>

          {/* Email or Mobile Number based on Registration Type */}
          {mentorData.registrationType === "emailPassword" && (
            <div>
              <p className="pb-2 text-gray-700">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={mentorData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-400 text-gray-700"
                required
              />
            </div>
          )}
          {mentorData.registrationType === "mobilePassword" && (
            <div>
              <p className="pb-2 text-gray-700">Mobile Number</p>
              <input
                type="number"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                value={mentorData.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-400 text-gray-700"
                required
              />
            </div>
          )}

          {/* Password */}
          <div>
            <p className="pb-2 text-gray-700">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={mentorData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Status */}
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={mentorData.status}
                onChange={() =>
                  setMentorData({ ...mentorData, status: !mentorData.status })
                }
              />
              <span>{mentorData.status ? "Active" : "Inactive"}</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Register Mentor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMentorModal;
