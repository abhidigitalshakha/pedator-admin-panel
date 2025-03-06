import React, { useEffect, useState } from "react";
import loginImage from "../../assets/images/Login.png";
import AnimatedHeading from "../../components/AnimatedHeading";
import { useAdminLogin } from "../../hooks/useAdminLogin";
import {Link, useNavigate } from "react-router-dom"; // Assuming you're using React Router

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error, status } = useAdminLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      navigate("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess: () => navigate("/"),
      }
    );
    console.log(status);
    // Add your login logic here
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-8 bg-[#effffe]">
      <>
        <AnimatedHeading
          texts={[
            "Welcome to the Admin Panel!",
            "Manage Your Platform Easily!",
          ]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center w-full">
          <div className="flex justify-center items-center w-full">
            <img
              src={loginImage}
              alt="Login-Image"
              className="w-full max-w-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" p-8 rounded-lg border border-gray-300 ">
              <p
                className={`text-center text-gray-600 ${
                  isError ? "mb-2" : "mb-8"
                } font-[500] text-3xl`}
              >
                Sign in to <span className="text-[#108e88]">Pedator</span>
              </p>
              <p
                className={`text-red-500 ${
                  isError ? "mb-2 block text-center" : "hidden"
                }`}
              >
                {isError && error.message}
              </p>
              <form onSubmit={handleSubmit} className="min-w-[350px]">
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none   transition-all"
                      placeholder="Enter your email"
                      required
                    />
                    <svg
                      className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none   transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <svg
                      className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-[#108e88] focus:ring-[#108e88] border-[#108e88] rounded"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link 
                    to="/forgot-password"
                    className="text-sm text-[#108e88] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full border bg-[#108e88] text-white py-3 px-4 rounded-lg focus:outline-none transition-all"
                >
                  {isPending ? "Logging in..." : "Login"}
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-[#108e88] hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginPage;
