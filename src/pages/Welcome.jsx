import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md text-center">
        <div className="w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px]">
          {/* Placeholder for image */}
          {/* <div className="h-48 border border-gray-200 rounded-lg mb-6 flex items-center justify-center"> */}
          {/* <span className="text-gray-400">Image / Logo</span> */}
          {/* </div> */}

          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Welcome to PopX
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Navigate to Create Account */}
          <Link
            to="/create-account"
            className="w-full py-3 mb-4 text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition #6C25FF"
          >
            Create Account
          </Link>

          {/* Navigate to Login page */}
          <p className="text-sm text-gray-600">
            Already Registered?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
