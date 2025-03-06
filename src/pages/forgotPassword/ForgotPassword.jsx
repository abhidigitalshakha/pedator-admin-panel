
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedHeading from "../../components/AnimatedHeading";
import loginImage from "../../assets/images/Login.png";
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    // Simulate password update
    setMessage('Password has been updated successfully.');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-8 bg-[#effffe]">
      <>
        <AnimatedHeading
          texts={["Forgot Your Password?", "Reset Your Password Quickly!"]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center w-full">
          <div className="flex justify-center items-center w-full">
            <img
              src={loginImage}
              alt="Forgot Password"
              className="w-full max-w-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="p-8 rounded-lg border border-gray-300">
              <p className="text-center text-gray-600 font-[500] text-3xl mb-8">
                Reset Your Password
              </p>
              {message && (
                <div
                  className={`${
                    message.includes('successfully') ? 'text-green-500' : 'text-red-500'
                  } text-center text-sm mb-4`}
                >
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="min-w-[350px]">
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                      placeholder="Enter your new password"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                      placeholder="Confirm your new password"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full border bg-[#108e88] text-white py-3 px-4 rounded-lg focus:outline-none transition-all"
                >
                  Update Password
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Remembered your password?{' '}
                  <Link to="/login" className="text-[#108e88] hover:underline">
                    Back to Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ForgotPassword;
