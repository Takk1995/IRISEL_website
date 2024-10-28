import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecommendCard from './recommendCard';
import '../../style/product.css';

function Recommend() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const itemsPerPage = 3; // 每頁顯示的商品數量
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchRecommendedProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/random-recommend-products');
      console.log('Fetched products:', response.data); // 印出回傳的資料
      setRecommendedProducts(response.data);
    } catch (error) {
      console.error('Error fetching recommended products:', error);
    }
  };

  useEffect(() => {
    fetchRecommendedProducts();
  }, []);

  const nextProducts = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      // 如果新索引超過了資料長度，重置為0
      return newIndex >= recommendedProducts.length ? 0 : newIndex;
    });
  };

  const prevProducts = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      // 如果新索引小於0，設置為最後一組
      return newIndex < 0 ? Math.max(recommendedProducts.length - itemsPerPage, 0) : newIndex;
    });
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
              key={product.product_id} // 使用 product_id 作為唯一鍵
              image={product.img_url}
              title={product.product_name}
              description={product.summary}
              alt={product.product_name}
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
