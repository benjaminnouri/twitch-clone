import React from 'react';
import RecommendedChannels from '../components/RecommendedChannels';
import VideoSlider from '../components/VideoSlider';
import LiveChannels from '../components/LiveChannels';
import FooterCallToAction from '../components/FooterCallToAction';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col pb-16"> {/* اضافه کردن padding-bottom */}
      <div className="flex container mx-auto py-4 flex-grow">
        {/* ستون سمت چپ برای Recommended Channels */}
        <div className="w-1/4 pr-4">
          <RecommendedChannels />
        </div>
        
        {/* بخش اصلی صفحه */}
        <div className="w-3/4">
          {/* بخش اسلایدر ویدیو */}
          <div className="mb-8">
            <VideoSlider />
          </div>

          {/* بخش کانال‌های زنده */}
          <div className="mb-8">
            <LiveChannels />
          </div>

          {/* بخش دسته‌بندی‌های پیشنهادی */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-purple-700 mb-4">
              Categories <span className="text-gray-500">we think you'll like</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* نمونه کارت دسته‌بندی */}
              <div className="relative">
                <img src="https://via.placeholder.com/150x150" alt="Category 1" className="w-full rounded-lg" />
                <p className="mt-2 text-sm font-bold text-black">Just Chatting</p>
              </div>
              <div className="relative">
                <img src="https://via.placeholder.com/150x150" alt="Category 2" className="w-full rounded-lg" />
                <p className="mt-2 text-sm font-bold text-black">VALORANT</p>
              </div>
              {/* اضافه کردن دسته‌بندی‌های دیگر */}
            </div>
            <div className="text-right mt-4">
              <a href="#" className="text-purple-700 font-bold">Show all</a>
            </div>
          </div>
        </div>
      </div>

      {/* اضافه کردن کامپوننت FooterCallToAction */}
      <FooterCallToAction />
    </div>
  );
};

export default Home;
