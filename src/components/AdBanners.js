import React from 'react';

const AdBanners = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">LinkTree</h3>
          <img
            src="https://via.placeholder.com/300x200?text=LinkTree+Ad"
            alt="LinkTree Ad"
            className="mb-2 w-full"
          />
          <a href="#" className="text-green-600 font-bold">LINK 2 SOCIALS</a>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">Donate</h3>
          <img
            src="https://via.placeholder.com/300x200?text=Donate+Ad"
            alt="Donate Ad"
            className="mb-2 w-full"
          />
          <a href="#" className="text-purple-600 font-bold">TTS</a>
        </div>
      </div>
    </div>
  );
};

export default AdBanners;
