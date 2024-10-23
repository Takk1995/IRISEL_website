import React, { useState } from 'react';
import RecommendCard from './recommendCard';
import '../../style/product.css';

function Recommend() {

  const recommendedProducts = [
    {
      image: require('../../img/products/test1.jpg'),
      title: '暮光之影香水1',
      description: '這是款令人難忘的香水，散發著迷人的香氣。',
      alt: '香水 1',
    },
    {
      image: require('../../img/products/test2.jpg'),
      title: '躍動微風香水2',
      description: '這款香水充滿活力，讓您感受到青春的氣息。',
      alt: '香水 2',
    },
    {
      image: require('../../img/products/test3.jpg'),
      title: '迷霧初晨香水3',
      description: '這款香水以優雅著稱，讓您成為聚會的焦點。',
      alt: '香水 3',
    },
    {
      image: require('../../img/products/test4.jpg'),
      title: '夢幻森林香水4',
      description: '這款香水融合了自然的清新與迷人的花香。',
      alt: '香水 4',
    },
    {
      image: require('../../img/products/test5.jpg'),
      title: '星夜詩韻香水5',
      description: '這款香水讓人沉醉於浪漫的星空之下。',
      alt: '香水 5',
    },
    {
      image: require('../../img/products/test6.jpg'),
      title: '晨曦之光香水6',
      description: '這款香水散發著清新的早晨氣息。',
      alt: '香水 6',
    },
    {
      image: require('../../img/products/test1.jpg'),
      title: '海風輕撫香水7',
      description: '這款香水帶有海風般的清新與自在感受。',
      alt: '香水 7',
    },
    {
      image: require('../../img/products/test2.jpg'),
      title: '落葉輕舞香水8',
      description: '這款香水充滿秋天的溫暖與木質香氣。',
      alt: '香水 8',
    },
    {
      image: require('../../img/products/test3.jpg'),
      title: '雪夜之夢香水9',
      description: '這款香水如同冬夜般寧靜，帶來舒適的氣息。',
      alt: '香水 9',
    },
    {
      image: require('../../img/products/test4.jpg'),
      title: '花瓣綻放香水10',
      description: '這款香水充滿花朵盛開的甜美與芬芳。',
      alt: '香水 10',
    },
    {
      image: require('../../img/products/test5.jpg'),
      title: '草地晨露香水11',
      description: '這款香水如同早晨的露水般清新。',
      alt: '香水 11',
    },
    {
      image: require('../../img/products/test6.jpg'),
      title: '星河流轉香水12',
      description: '這款香水融合了神秘與閃耀的氣息。',
      alt: '香水 12',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // 每頁顯示的商品數量

  const nextProducts = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % recommendedProducts.length);
  };

  const prevProducts = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + recommendedProducts.length) % recommendedProducts.length);
  };

  // 取得當前頁面顯示的商品
  const displayedProducts = recommendedProducts.slice(currentIndex, currentIndex + itemsPerPage);


  return (
    <div className="recommend">
      <h3>您可能也會喜歡</h3>
      <div className="row">
      <i className="fas fa-chevron-left fixed-arrow fixed-left" onClick={prevProducts}></i>
      <div className="product-list">
          {displayedProducts.map((product, index) => (
            <RecommendCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              alt={product.alt}
              className="pro_card"
            />
          ))}
        </div>
        <i className="fas fa-chevron-right fixed-arrow fixed-right" onClick={nextProducts}></i>
      </div>
    </div>
  );
}

export default Recommend;