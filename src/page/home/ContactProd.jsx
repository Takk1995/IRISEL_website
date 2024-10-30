import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/homepage.css';

function Carousel({ images, routes }) {
  const [currpic, trantime] = useState(0);
  const [isDragg, setDragg] = useState(false);
  
  const navigate = useNavigate();

  const BtnClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragg) {
        trantime((prevIndex) => (prevIndex + 4) % images.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isDragg, images.length]);

  const ScrollChange = (event) => {
    setDragg(true); //true拖曳
    const value = Number(event.target.value); //當前索引值轉換數字
    trantime(value); //接收當前索引顯示目前圖片
  };

  const MouseUp = () => {
    setDragg(false); //false不拖曳
  };

  return (
    <div className="carouselProd">
      <div
        className="carimages"
        style={{
          // 圖片寬度做長度的變換
          transform: `translateX(calc(-${(currpic * 295) + 9}px))`
        }}
      >
              {/* 倒數第四張開始，並開始前四張置於尾端 */}
        {[...images.slice(-4), ...images, ...images.slice(0, 4)].map((image, index) => (
          <div key={index} className="imgovers">
          <img 
          src={image.src} 
          alt={`carousel-${index}`} 
          className="carimg imgset imgPr imgpa" />
          <div className="imgoverlay">
            <button 
            className="imgoverbtn bttnr btnhover"
            onClick={() => BtnClick(image.link)} >開始選購</button>
          </div>
        </div>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max={images.length - 4}
        value={currpic}
        onChange={ScrollChange}
        onMouseUp={MouseUp}
        className="scrbar"
      />
    </div>
  );
};

export default Carousel;

