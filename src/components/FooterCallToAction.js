import React from 'react';

const FooterCallToAction = () => {
  return (
    <div className="bg-purple-700 text-white p-4 flex justify-between items-center fixed bottom-0 left-0 w-full">
      <div className="flex items-center">
        <img src="https://www.svgrepo.com/show/354405/twitch-icon.svg" alt="Twitch Logo" className="h-10 w-10 mr-4" />
        <div>
          <p className="font-bold">Join the Twitch community!</p>
          <p>Discover the best live streams anywhere.</p>
        </div>
      </div>
      <button className="bg-white text-purple-700 font-bold py-2 px-4 rounded-full">Sign Up</button>
    </div>
  );
};

export default FooterCallToAction;

