import React from 'react';

const StreamerProfile = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Streamer Avatar"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold flex items-center">
            djscheme
            <span className="ml-2 text-purple-500">✔️</span>
            <span className="ml-2 text-purple-500">✔️</span>
          </h2>
          <p className="text-gray-600">8.08 on Twitch | LIVE ON THE TOURBUS, PREVIEWING NEW MUSIC</p>
          <div className="flex items-center mt-2">
            <span className="bg-gray-200 text-gray-700 text-xs font-bold py-1 px-2 rounded mr-2">DJs</span>
            <span className="bg-gray-200 text-gray-700 text-xs font-bold py-1 px-2 rounded mr-2">HipHop</span>
            <span className="bg-gray-200 text-gray-700 text-xs font-bold py-1 px-2 rounded">English</span>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full">Follow</button>
          <button className="bg-gray-200 text-black font-bold py-2 px-4 rounded-full">Subscribe</button>
          <span className="text-red-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553 9H4.447L9 10h6zM9 6v4m6-4v4"
              />
            </svg>
            3,112
          </span>
          <span className="text-gray-600">1:06:16</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">About djscheme</h3>
        <p className="text-gray-700">54K followers</p>
        <p className="text-gray-600 mb-2">CREATE WHAT YOU LOVE</p>
        <a href="#" className="text-gray-500 font-bold">LINK TREE</a>
      </div>
    </div>
  );
};

export default StreamerProfile;
