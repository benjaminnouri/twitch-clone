import React from 'react';

const LiveStream = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-4 shadow-md">
        <div className="flex items-center mb-6">
          <img
            src="path/to/avatar.jpg"
            alt="User Avatar"
            className="rounded-full w-12 h-12"
          />
          <span className="ml-4 text-lg font-semibold">rosso.berlin</span>
        </div>
        <nav className="space-y-4">
          <button className="w-full text-left py-2 px-3 bg-red-100 rounded-md">
            پخش زنده
          </button>
          <button className="w-full text-left py-2 px-3">تنظیمات</button>
          <button className="w-full text-left py-2 px-3">آمار پخش زنده</button>
          <button className="w-full text-left py-2 px-3">راهنمای پخش زنده</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">پخش زنده</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + بارگذاری ویدیو
          </button>
        </header>

        {/* Live Stream Panel */}
        <section className="bg-white p-4 shadow-md rounded-md flex">
          {/* Chat Section */}
          <div className="w-1/3 p-4 border-r">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">گفت‌وگوی زنده</h2>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" checked />
                <span className="ml-2">فعال</span>
              </label>
            </div>
            <div className="h-64 overflow-y-auto bg-gray-50 p-4 rounded-md">
              {/* Chat messages */}
              <p className="text-gray-600">پیام‌ها را اینجا بنویسید...</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-2/3 p-4">
            <div className="relative w-full h-64 bg-black rounded-md flex items-center justify-center">
              <video
                className="w-full h-full rounded-md"
                controls
                autoPlay
                src="path/to/stream.m3u8" // لینک استریم زنده HLS
              />
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="mt-6">
          <div className="flex items-center mb-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md"
              placeholder="https://www.aparat.com/STRONG_GIRL/live"
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              کپی
            </button>
          </div>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <button className="bg-gray-200 p-2 rounded-full">
              {/* Icon */}
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              {/* Icon */}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LiveStream;
