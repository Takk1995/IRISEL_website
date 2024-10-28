import '../../style/homepage.css';
import React, { useState, useEffect } from "react";
import Banpic01 from '../../img/home/pic114001.png';
import Banpic02 from '../../img/home/pic114004.png';
import Banpic03 from '../../img/home/pic114006.png';

const images = [
  Banpic01, Banpic02, Banpic03
];

const Carousel = () => {
  const [currpic, trantime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
                // 當前圖片索引，自動更新+1
      trantime((prepic) => (prepic + 1) % images.length);
    }, 5000); //五秒變換一次

    return () => clearInterval(interval);
  }, []); //重置定時器

  return (
    <div className="imgdivcarouse posrela">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-${index}`}
          className={`imgwh imgcarousel ${index === currpic ? "active" : ""}`}
        />        
      ))}
    </div>
  );
};

export default Carousel;
