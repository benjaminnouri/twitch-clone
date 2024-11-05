import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6">Log in to Twitch</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <div className="flex justify-between items-center mb-6">
          <a href="#" className="text-purple-700 text-sm">Trouble logging in?</a>
        </div>
        <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg w-full">
          Log In
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account? <a href="#" className="text-purple-700 font-bold">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
