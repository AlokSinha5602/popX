import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full h-screen bg-[white] p-[150px] flex flex-col items-center  justify-center gap-[10px]" >
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Sign in to your <br /> PopX account
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Login button */}
        <button className='w-[100%] h-[50px] rounded-full bg-[#24b2ff] mt-[40px] text-white'>
          Login
        </button>

        {/* Back to Welcome */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/" className="text-purple-600 font-medium hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
