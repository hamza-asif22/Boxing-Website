// VideoSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: i => (
      <div className="w-3 h-3 bg-white rounded-full" />
    ),
    prevArrow: (
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8249;
      </button>
    ),
    nextArrow: (
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8250;
      </button>
    ),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        <div className="p-4">
          <video className="w-full" controls>
            <source src="/media/v2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-4">
          <video className="w-full" controls>
            <source src="/media/v3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-4">
          <video className="w-full" controls>
            <source src="/media/v5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-4">
          <video className="w-full" controls>
            <source src="/media/v6.mp4" type="video/mp4" />
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default VideoSlider;
