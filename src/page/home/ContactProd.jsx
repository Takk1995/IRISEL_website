import React, { useState, useEffect } from 'react';
import '../../style/homepage.css';
import carprodpic01 from '../../img/home/prpic(25).jpg';
import carprodpic02 from '../../img/home/prpic(05).jpg';
import carprodpic03 from '../../img/home/prpic(30).jpg';
import carprodpic04 from '../../img/home/prpic(15).jpg';
import carprodpic05 from '../../img/home/prpic(04).jpg';
import carprodpic06 from '../../img/home/prpic(39).jpg';
import carprodpic07 from '../../img/home/prpic(07).jpg';
import carprodpic08 from '../../img/home/prpic(32).jpg';
import carprodpic09 from '../../img/home/prpic(33).jpg';
import carprodpic10 from '../../img/home/prpic(37).jpg';
import carprodpic11 from '../../img/home/prpic(27).jpg';
import carprodpic12 from '../../img/home/prpic(40).jpg';


const images = [
  carprodpic01,
  carprodpic02,
  carprodpic03,
  carprodpic04,
  carprodpic05,
  carprodpic06,
  carprodpic07,
  carprodpic08,
  carprodpic09,
  carprodpic10,
  carprodpic11,
  carprodpic12
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleScrollChange = (event) => {
    setIsDragging(true);
    const value = Number(event.target.value);
    setCurrentIndex(value);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="carouselProd">
      <div
        className="carimages"
        style={{
          transform: `translateX(calc(-${(currentIndex * 295) + 9}px))`
        }}
      >
        {[...images.slice(-4), ...images, ...images.slice(0, 4)].map((image, index) => (
          <div key={index} className="imgovers">
          <img src={image} alt={`carousel-${index}`} className="carimg imgset imgPr imgpa" />
          <div className="imgoverlay">
            <button className="imgoverbtn bttnr btnhover">開始選購</button>
          </div>
        </div>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max={images.length - 4}
        value={currentIndex}
        onChange={handleScrollChange}
        onMouseUp={handleMouseUp}
        className="scrbar"
      />
    </div>
  );
};

export default Carousel;

