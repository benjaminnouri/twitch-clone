import React, { useState } from 'react';

const channels = [
  { name: 'BLOU', category: 'EA Sports College ...', viewers: '1.1K' },
  { name: 'ttv_ev1l_extreme', category: 'Fortnite', viewers: '13' },
  { name: 'Arky', category: 'Just Chatting', viewers: '528' },
  { name: 'scumtk', category: 'EA Sports College ...', viewers: '472' },
  { name: 'S4atan', category: 'Apex Legends', viewers: '100' },
];

const ViewerRecommendations = () => {
  const [visibleChannels, setVisibleChannels] = useState(5);
  const [showLess, setShowLess] = useState(false);

  const toggleShow = () => {
    if (showLess) {
      setVisibleChannels(5);
    } else {
      setVisibleChannels(channels.length);
    }
    setShowLess(!showLess);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-bold mb-4">DJScheme Viewers Also Watch</h3>
      <ul>
        {channels.slice(0, visibleChannels).map((channel, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <p className="font-bold text-sm">{channel.name}</p>
                <p className="text-xs text-gray-500">{channel.category}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 text-xs mr-2">●</span>
              <p className="text-sm font-bold">{channel.viewers}</p>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={toggleShow}
        className="text-purple-700 font-bold mt-4 block"
      >
        {showLess ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ViewerRecommendations;
