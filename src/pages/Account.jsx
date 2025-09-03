import React from "react";

export default function Account() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Account Settings
        </h2>

        {/* Profile Card */}
        <div className="flex items-start p-4 border rounded-xl relative">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 13a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>
          </div>

          {/* User Info */}
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
            <p className="text-sm text-gray-600 mt-2">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}