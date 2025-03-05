import React, { useState, useEffect } from "react";

const EditMentorModal = ({ isOpen, onClose, mentorData, onUpdate }) => {
  const [updatedMentor, setUpdatedMentor] = useState({
    username: "",
    registrationType: "",
    email: "",
    mobileNumber: "",
    password: "",
    status: true,
  });

  useEffect(() => {
    if (mentorData) {
      setUpdatedMentor(mentorData);
    }
  }, [mentorData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMentor({ ...updatedMentor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedMentor);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">Edit Mentor</h2>
        
        {/* Close Button */}
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
              value={updatedMentor.username}
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
              value={updatedMentor.registrationType}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            >
              <option value="">Select Registration Type</option>
              <option value="emailPassword">Email & Password</option>
              <option value="mobilePassword">Mobile & Password</option>
            </select>
          </div>

          {/* Email or Mobile Number based on Registration Type */}
          {updatedMentor.registrationType === "emailPassword" && (
            <div>
              <p className="pb-2 text-gray-700">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={updatedMentor.email}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-400 text-gray-700"
                required
              />
            </div>
          )}
          {updatedMentor.registrationType === "mobilePassword" && (
            <div>
              <p className="pb-2 text-gray-700">Mobile Number</p>
              <input
                type="number"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                value={updatedMentor.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-400 text-gray-700"
                required
              />
            </div>
          )}

          {/* Password (Optional - Can be left empty if not changing) */}
          <div>
            <p className="pb-2 text-gray-700">New Password (Leave blank to keep current password)</p>
            <input
              type="password"
              name="password"
              placeholder="Enter New Password"
              value={updatedMentor.password}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            />
          </div>

          {/* Status */}
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={updatedMentor.status}
                onChange={() =>
                  setUpdatedMentor({ ...updatedMentor, status: !updatedMentor.status })
                }
                className="cursor-pointer"
              />
              <span className="text-gray-700">{updatedMentor.status ? "Active" : "Inactive"}</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Update Mentor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMentorModal;
