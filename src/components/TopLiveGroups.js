import React from 'react';

// Data sample for live groups
const groups = [
  {
    id: 1,
    name: 'Games',
    icon: '🎮', // Replace with actual icons or images
  },
  {
    id: 2,
    name: 'IRL',
    icon: '🎤',
  },
  {
    id: 3,
    name: 'Music',
    icon: '🎹',
  },
  {
    id: 4,
    name: 'Gambling',
    icon: '🎲',
  },
  {
    id: 5,
    name: 'Creative',
    icon: '🎨',
  },
  {
    id: 6,
    name: 'Alternative',
    icon: '⚙️',
  },
];

const TopLiveGroups = () => {
  return (
    <div className="bg-gray-900 p-8">
      <h2 className="text-2xl text-white font-bold mb-4">Top Live Groups</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-gray-800 flex flex-col items-center justify-center w-48 h-32 rounded-lg shadow-md"
          >
            <div className="text-4xl">{group.icon}</div>
            <span className="mt-2 text-white font-semibold">{group.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLiveGroups;
