import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const videos = [
    { title: 'Pokémon Scarlet/Violet', viewers: '1.6K', live: true, img: 'https://via.placeholder.com/320x180' },
    { title: 'Just Chatting', viewers: '4.2K', live: true, img: 'https://via.placeholder.com/320x180' },
    { title: 'League of Legends', viewers: '3.1K', live: true, img: 'https://via.placeholder.com/320x180' },
    // Add more video items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="p-2">
            <div className="relative">
              <img src={video.img} alt={video.title} className="w-full rounded-lg" />
              {video.live && <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>}
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-bold text-black">{video.title}</h3>
              <p className="text-xs text-gray-500">{video.viewers} viewers</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
