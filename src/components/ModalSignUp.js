import React from 'react';

const ModalSignUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Join Twitch today</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
            <div className="flex space-x-2">
              <select className="w-1/3 px-3 py-2 border rounded-lg">
                <option>Month</option>
              </select>
              <select className="w-1/3 px-3 py-2 border rounded-lg">
                <option>Day</option>
              </select>
              <select className="w-1/3 px-3 py-2 border rounded-lg">
                <option>Year</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone number</label>
            <div className="flex space-x-2">
              <select className="w-1/3 px-3 py-2 border rounded-lg">
                <option>United States +1</option>
              </select>
              <input
                type="text"
                id="phone"
                className="w-2/3 px-3 py-2 border rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Sign Up
            </button>
            <a href="#" className="text-purple-700 font-bold">Have an account? Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSignUp;
