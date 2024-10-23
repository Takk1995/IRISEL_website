import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Recommend from '../../components/recommend';
import '../../style/product.css';


function Product() {

  const { id } = useParams(); // 從路由參數中取得商品 ID
  const [product, setProduct] = useState(null);  // 初始化 product 為 null
  // const productId = 1; // 這裡可以根據路由動態設定產品 ID

  useEffect(() => {
    console.log('獲取的 id:', id); // 確認 id 是否正確
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}`);
        console.log('Fetched Product:', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error('無法獲取商品資料:', error.response ? error.response.data : error.message);
      }
    };

    if (id) {
      fetchProduct(); // 當 id 存在時，呼叫函數獲取資料
    }
  }, [id]);

    if (!id) {
      return <div>無效的商品 ID，請確認網址是否正確。</div>;
    }

  // 檢查 product 是否已加載
  if (!product) {
    return <div>載入中...</div>; // 加載時的提示
  }

  return (
    <div>
      {/* <h1>測試</h1> */}
      {/* <Header /> */}
      <main className="product_container">
        <div className="product-image">
          <img src={product.img_url || require('../../img/products/test1.jpg')} alt="Product Image" />
        </div>
        <div className="product_info">
          <i className="bi bi-bookmark-star"></i>
          <h3>{product.product_name || '商品名稱'}</h3>
          {/* <h3>荒野之息香水</h3> */}
          <div id="ml">
            <p>容量選擇</p>
            <div id="btn_group">
              <button>30ml</button>
              <button>50ml</button>
              <button>100ml</button>
            </div>
            <br />
            <div className="price">
              <div className="price_L">
                <p>售價</p>
              </div>
              <div className="price_R">
                <span>NT&emsp;</span>
                {/* <span>5000</span> */}
                <span>{product.price || '價格'}</span>
                <span>&ensp;元</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button className="tablinks active">香氛調性</button>
          </div>
          <div className="tabcontent">
            <p>{product.scent_profile || '香氛調性描述'}</p>
            {/* <p>柑橘果香，以明亮的柑橘與果香調，帶來活力四射的清新感，彷彿迎面而來的輕盈微風。</p> */}
          </div>

          <div className="tabs">
            <button className="tablinks">商品描述</button>
          </div>
          <div className="tabcontent">
            <p>{product.product_intro || '商品描述'}</p>
            {/* <p>
              「躍動微風」香水以青春活力為靈感，運用柑橘與果香調，打造充滿能量的香氛體驗。
              明亮的前調猶如早晨的朝露，清新且充滿活力。這款香水勾勒出年輕與無限可能的感受，彷彿迎風奔跑的瞬間。
              隨著時間流轉，柔和的花香調輕輕蔓延，展現出自信與陽光的個性。這是一款專為那些無懼挑戰、熱愛冒險的靈魂而設的香水。
            </p> */}
          </div>
        </div>
      </main>

      <div>
        <div>
          <div class="middle-area">
            <div class="category_text">
              <span> 分類: </span>&ensp;
              <span> 男香 </span>&ensp;
              <span> / </span>
              <span> 清新木質調 </span>
            </div>
            <div class="cart">
              {/* 下拉選單 */}
              數量:
              <select id="quantity" name="quantity" class="quantity-select">
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              <button class="product-button">加入購物車</button>
            </div>
          </div>
        </div>
      </div>

      <Recommend /> {/* 推薦區域 */}
      <footer>
        <div>
          <p>頁尾</p>
        </div>
      </footer>
    </div>
  );
}

export default Product;