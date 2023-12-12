import React, { useState, useEffect } from 'react';
import './Carouselimage.css'; 

const Carousel = ({ slides, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };

    const id = setInterval(nextSlide, interval);
    return () => clearInterval(id);
  }, [current, length, interval]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='carousel'>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <>
                <img src={slide.image} alt='carousel' className='image' />
                <div className='text'>{slide.caption}</div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
