import React from 'react';

const channels = [
  { name: 'HasanAbi', game: 'Just Chatting', viewers: '42K', live: true },
  { name: 'VALORANT', game: 'VALORANT', viewers: '7K', live: true },
  { name: 'zackrawrr', game: 'Just Chatting', viewers: '29.9K', live: true },
  { name: 'loltyler1', game: 'League of Legends', viewers: '16.2K', live: true },
  { name: 's0mcs', game: 'VALORANT', viewers: '10.3K', live: true },
  { name: 'Fanum', game: 'The Walking Dead', viewers: '19.6K', live: true },
  { name: 'Flats', game: 'Apex Legends', viewers: '831', live: true },
  { name: 'Joe_Bartolozzi', game: 'Games + Demos', viewers: '4.7K', live: true },
  { name: 'Lord_Kebun', game: 'Grand Theft Auto V', viewers: '11.4K', live: true },
  { name: 'itsSpoit', game: 'Tom Clancy\'s Rainbow Six', viewers: '2.7K', live: true },
];

const RecommendedChannels = () => {
  return (
    <div className="bg-gray-100 p-4 shadow-lg w-64 h-screen">
      <h3 className="text-gray-700 font-bold mb-4">RECOMMENDED CHANNELS</h3>
      <ul>
        {channels.map((channel, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src={`https://avatars.dicebear.com/api/initials/${channel.name}.svg`}
                alt={`${channel.name} avatar`}
                className="h-8 w-8 rounded-full"
              />
              <div className="ml-2">
                <p className="text-sm font-bold text-black">{channel.name}</p>
                <p className="text-xs text-gray-500">{channel.game}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {channel.live && (
                <span className="text-red-600 text-lg">•</span>
              )}
              <p className="text-sm text-gray-700">{channel.viewers}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedChannels;
