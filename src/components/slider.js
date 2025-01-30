import React, { useState, useEffect, useRef } from 'react';
import "./slider.css"

const Slider = ({ images, autoSlide = true, slideInterval = 3000, showControls = true, showIndicators = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return; // Handle empty images array

    if (autoSlide) {
      startAutoSlide();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [autoSlide, slideInterval, images]);

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);
  };

  const goToPrevious = () => {
    clearInterval(timerRef.current);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (autoSlide) startAutoSlide();
  };

  const goToNext = () => {
    clearInterval(timerRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (autoSlide) startAutoSlide();
  };

  const goToSlide = (index) => {
    clearInterval(timerRef.current);
    setCurrentIndex(index);
    if (autoSlide) startAutoSlide();
  };

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div className="slider-container">
      <div className="slider-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentIndex === index? 'active': ''}`}
            style={{ backgroundImage: `url(${image})` }} // Use backgroundImage for images
          ></div>
        ))}
      </div>

      {showControls && (
        <div className="slider-controls">
          <button onClick={goToPrevious} className="slider-button">
            Previous
          </button>
          <button onClick={goToNext} className="slider-button">
            Next
          </button>
        </div>
      )}

      {showIndicators && (
        <div className="slider-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator-button ${currentIndex === index? 'active': ''}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};


export default Slider;