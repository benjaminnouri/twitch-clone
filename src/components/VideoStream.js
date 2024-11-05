import React from 'react';

const VideoStream = () => {
  return (
    <div className="bg-gray-900 w-auto h-2/5 flex flex-col items-center justify-center p-4">
      <div className="relative bg-black w-full h-full  rounded-lg overflow-hidden shadow-lg">
        {/* استریم ویدیو */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          controls
          autoPlay
          muted
        >
          <source src="your-video-source.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* نشانگر LIVE */}
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded">
          LIVE
        </div>
        {/* کنترل‌های ویدیو */}
        <div className="absolute bottom-2 left-2 text-white text-xs flex items-center space-x-2">
          <button className="bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          </button>
          <button className="bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoStream;
