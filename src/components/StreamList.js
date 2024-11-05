import React from 'react';

const StreamList = () => {
  const streams = [
    { id: 1, title: 'Stream 1', viewerCount: 120 },
    { id: 2, title: 'Stream 2', viewerCount: 80 },
    // استریم‌های بیشتری اضافه کنید
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {streams.map(stream => (
        <div key={stream.id} className="bg-gray-700 p-4 rounded-lg text-white">
          <h2 className="text-lg font-bold">{stream.title}</h2>
          <p>{stream.viewerCount} viewers</p>
        </div>
      ))}
    </div>
  );
};

export default StreamList;
