import React from "react";
import RecommendedChannels from "../components/RecommendedChannels";
import ViewerRecommendations from "../components/ViewerRecommendations";
import FooterCallToAction from "../components/FooterCallToAction";
import VideoStream from "../components/VideoStream";
import StreamChat from "../components/StreamChat";
import StreamerProfile from "../components/StreamerProfile";
import AdBanners from "../components/AdBanners";

const StreamPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col pb-16">
      <div className="container mx-auto py-4 flex-grow">
        <div className="flex">
          {/* ستون سمت چپ برای Recommended Channels */}
          <div className="w-1/6 pr-4">
            <div className="h-1/3">
              <RecommendedChannels />
            </div>
            <ViewerRecommendations />
          </div>

          {/* بخش مرکزی برای Video Stream */}
          <div className="w-2/4 pr-4">
            <VideoStream />
            {/* بخش اطلاعات استریمر */}
            <StreamerProfile />
            <AdBanners /> {/* بنرهای تبلیغاتی زیر ویدیو استریم */}
          </div>

          {/* ستون سمت راست برای Stream Chat */}
          <div className="w-1/4 pr-4">
            <StreamChat />
          </div>
        </div>
      </div>

      <FooterCallToAction />
    </div>
  );
};

export default StreamPage;
