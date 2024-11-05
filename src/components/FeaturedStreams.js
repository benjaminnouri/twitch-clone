import React from 'react';

// Data sample for streams
const streams = [
  {
    id: 1,
    thumbnail: 'https://via.placeholder.com/300x200', // Replace with actual thumbnail URLs
    title: 'Mr Beast Allegations continue, Gabe Newell sending Deadlock in...',
    streamer: 'gwrldmedia',
    category: 'Just Chatting',
    viewers: 18,
    live: true,
  },
  {
    id: 2,
    thumbnail: 'https://via.placeholder.com/300x200',
    title: 'FIGHT WEEK! 📍 DUBLIN IRELAND 📍 IRL',
    streamer: 'fousey',
    category: 'IRL',
    viewers: 12350,
    live: true,
  },
  {
    id: 3,
    thumbnail: 'https://via.placeholder.com/300x200',
    title: 'Lookin for Booty | KICK Partner',
    streamer: 'FrostyReal',
    category: 'Sea of Thieves',
    viewers: 0,
    live: true,
  },
];

const FeaturedStreams = () => {
  return (
    <div className="bg-gray-900 p-8">
      <h2 className="text-2xl text-white font-bold mb-4">Featured Streams</h2>
      <div className="grid grid-cols-3 gap-6">
        {streams.map((stream) => (
          <div key={stream.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img
                src={stream.thumbnail}
                alt="Stream Thumbnail"
                className="w-full h-48 object-cover"
              />
              {stream.live && (
                <span className="absolute top-2 left-2 bg-green-500 px-2 py-1 text-xs font-semibold rounded">
                  LIVE
                </span>
              )}
              <span className="absolute top-2 right-2 bg-black bg-opacity-60 px-2 py-1 text-xs rounded">
                {stream.viewers.toLocaleString()} viewers
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg font-semibold mb-1">{stream.title}</h3>
              <p className="text-gray-400 text-sm">{stream.streamer}</p>
              <p className="text-gray-500 text-xs">{stream.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedStreams;
