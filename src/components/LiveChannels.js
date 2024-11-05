import React, { useState } from 'react';

const channels = [
  {
    title: 'HOGWATCH: REPUBLICANS VS. THE ...',
    streamer: 'HasanAbi',
    category: 'Just Chatting',
    viewers: '44.2K',
    tags: ['GamerRage', 'politics', 'adhd', 'news'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: '(REBROADCAST) VALORANT Champions...',
    streamer: 'VALORANT',
    category: 'VALORANT',
    viewers: '7K',
    tags: ['Esports', 'DropsEnabled', 'Champions'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'METAL GEAR RISING CONTINUES+NEW...',
    streamer: 'zackrawrr',
    category: 'Just Chatting',
    viewers: '34.3K',
    tags: ['worldofwarcraft', 'English'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'CHALLENGER ! well expect ! NEXT ? ...',
    streamer: 'loltyler1',
    category: 'League of Legends',
    viewers: '14.8K',
    tags: ['English'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'FANUM PLAYS THE WALKING DEAD ...',
    streamer: 'Fanum',
    category: 'The Walking Dead: Season Two',
    viewers: '19.2K',
    tags: ['hispanic', 'black', 'D10', 'AMP'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'FANUM PLAYS THE WALKING DEAD ...',
    streamer: 'Fanum',
    category: 'The Walking Dead: Season Two',
    viewers: '19.2K',
    tags: ['hispanic', 'black', 'D10', 'AMP'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'FANUM PLAYS THE WALKING DEAD ...',
    streamer: 'Fanum',
    category: 'The Walking Dead: Season Two',
    viewers: '19.2K',
    tags: ['hispanic', 'black', 'D10', 'AMP'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'FANUM PLAYS THE WALKING DEAD ...',
    streamer: 'Fanum',
    category: 'The Walking Dead: Season Two',
    viewers: '19.2K',
    tags: ['hispanic', 'black', 'D10', 'AMP'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'FANUM PLAYS THE WALKING DEAD ...',
    streamer: 'Fanum',
    category: 'The Walking Dead: Season Two',
    viewers: '19.2K',
    tags: ['hispanic', 'black', 'D10', 'AMP'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
  {
    title: 'FANUM PLAYS THE WALKING DEAD ...',
    streamer: 'Fanum',
    category: 'The Walking Dead: Season Two',
    viewers: '19.2K',
    tags: ['hispanic', 'black', 'D10', 'AMP'],
    live: true,
    img: 'https://via.placeholder.com/320x180'
  },
];

const LiveChannels = () => {
    const [visibleChannels, setVisibleChannels] = useState(5); // نمایش حداقل 5 کانال
  
    const showMoreChannels = () => {
      setVisibleChannels(prevVisibleChannels => prevVisibleChannels + 5); // افزایش تعداد کانال‌های نمایش داده‌شده
    };
  
    const showLessChannels = () => {
      setVisibleChannels(5); // بازگرداندن به تعداد اولیه
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-purple-700 mb-4">
          Live channels <span className="text-gray-500">we think you'll like</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {channels.slice(0, visibleChannels).map((channel, index) => (
            <div key={index} className="relative">
              <img src={channel.img} alt={channel.title} className="w-full rounded-lg" />
              {channel.live && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
              )}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                {channel.viewers} viewers
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-bold text-black">{channel.title}</h3>
                <p className="text-xs text-gray-500">{channel.streamer}</p>
                <p className="text-xs text-gray-400">{channel.category}</p>
                <div className="flex flex-wrap mt-1">
                  {channel.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <hr className="border-gray-300 flex-grow mr-2"/>
          {visibleChannels < channels.length ? (
            <button onClick={showMoreChannels} className="text-purple-700 font-bold flex items-center">
              Show more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : (
            <button onClick={showLessChannels} className="text-purple-700 font-bold flex items-center">
              Show less <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 15l-7-7-7 7" />
              </svg>
            </button>
          )}
          <hr className="border-gray-300 flex-grow ml-2"/>
        </div>
      </div>
    );
  };
  
  export default LiveChannels;
