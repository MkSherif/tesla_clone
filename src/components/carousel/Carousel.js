import React, { useState, useEffect } from 'react';
import './Carousel.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]); 

  const goToNextSlide = () => {
    let index = activeIndex;
    let length = items.length;
    index = (index === length - 1) ? 0 : index + 1;
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    let index = activeIndex;
    let length = items.length;
    index = (index === 0) ? length - 1 : index - 1;
    setActiveIndex(index);
  };

  return (
    <div className="carousel" >
      <button data-aos="fade-up" onClick={goToPrevSlide}>←</button>
      <div className="carousel-content" data-aos="fade-up">
        <h2>{items[activeIndex].heading}</h2>
        <div className="carousel-text">{items[activeIndex].text}</div>
        <img src={items[activeIndex].image} alt="" className="carousel-image" />
      </div>
      <button onClick={goToNextSlide}>→</button>
    </div>
  );
};

export default Carousel;
