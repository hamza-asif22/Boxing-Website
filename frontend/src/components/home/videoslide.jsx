import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSlider = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  const playActiveVideo = () => {
    const videos = videoRefs.current;
    videos.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    if (videoEnded) {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
        setVideoEnded(false);
      }
    }
  }, [videoEnded]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: false,
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
    afterChange: playActiveVideo,
    beforeChange: handleBeforeChange,
  };

  useEffect(() => {
    playActiveVideo();
  }, [currentSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Slider ref={sliderRef} {...settings}>
        <div className="p-4">
          <video
            ref={el => videoRefs.current[0] = el}
            className="w-full"
            autoPlay
            muted
            controls
            onEnded={handleVideoEnd}
          >
            <source src="/media/v2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-4">
          <video
            ref={el => videoRefs.current[1] = el}
            className="w-full"
            autoPlay
            muted
            controls
            onEnded={handleVideoEnd}
          >
            <source src="/media/v3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-4">
          <video
            ref={el => videoRefs.current[2] = el}
            className="w-full"
            autoPlay
            muted
            controls
            onEnded={handleVideoEnd}
          >
            <source src="/media/v5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-4">
          <video
            ref={el => videoRefs.current[3] = el}
            className="w-full"
            autoPlay
            muted
            controls
            onEnded={handleVideoEnd}
          >
            <source src="/media/v6.mp4" type="video/mp4" />
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default VideoSlider;
