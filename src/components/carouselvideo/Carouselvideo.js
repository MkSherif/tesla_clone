import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Carouselvideo.css';

const VideoCarousel = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const intervalId = setInterval(() => {
      handleNextVideo();
    }, 6000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentVideoIndex, videos.length]);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="video-carousel">
      <video 
        data-aos="fade-up"
        className='videos_carousel' 
        controls={false}
        autoPlay
        muted
        src={videos[currentVideoIndex].url} 
      />
      <div data-aos="fade-up" className="video-description">
        <p>{videos[currentVideoIndex].description}</p>
      </div>
    </div>
  );
};

export default VideoCarousel;

