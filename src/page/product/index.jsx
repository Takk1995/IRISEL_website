import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Recommend from '../../components/recommend';
import PopCart from '../../components/popCart';
import '../../style/product.css';

function Product() {

  const { code } = useParams(); // 從路由參數中取得商品 code
  const [product, setProduct] = useState(null);  // 初始化 product 為 null
  // const productId = 1; // 這裡可以根據路由動態設定產品 code
  const [price, setPrice] = useState(0); // 初始化價格狀態
  const isMember = JSON.parse(localStorage.getItem('isMember')) || false;
  const [popSwitch, setPopSwitch] = useState(false)
  const switchPop = () => setPopSwitch(!popSwitch)

  useEffect(() => {
    console.log('獲取的 code:', code); // 確認 code 是否正確
    const fetchProduct = async (productCode) => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/${code}`);
        console.log('Fetched Product:', response.data);
        setProduct(response.data[0]);
        setPrice(response.data[0].price); // 設定初始價格
        console.log('Product State after fetch:', response.data); // 確認狀態更新
      } catch (error) {
        console.error('無法獲取商品資料:', error.response ? error.response.data : error.message);
      }
    };

    if (code) {
      fetchProduct(code); // 當 code 存在時，呼叫函數獲取資料
    }
  }, [code]);

    if (!code) {
      return <div>無效的商品編號，請確認網址是否正確。</div>;
    }

  // 觀察 product 狀態每次重新渲染時的值
  console.log('Product State:', product);

  const handleCapacityChange = async (capacity) => {
    // 提取出類別和商品號碼
    const category = code.charAt(2); // 第3位類別
    const productNum = code.slice(5, 7); // 取出類別內商品號碼 (最後兩位)

    // 根據容量設置新的 product_code
    // 定義 productCode 變數
    let productCode; 
    if (capacity === 30) {
      productCode = `10${category}10${productNum}`; // 30ml
    } else if (capacity === 50) {
      productCode = `10${category}20${productNum}`; // 50ml
    } else if (capacity === 100) {
      productCode = `10${category}30${productNum}`; // 100ml
    }

    console.log(`Fetching price for product code: ${productCode}`);

    // 根據新的 product_code 獲取價格
    try {
      const response = await axios.get(`http://localhost:8000/api/product/${productCode}`);
      setPrice(response.data[0].price); // 更新價格
      console.log('Updated Price:', response.data[0].price);
    } catch (error) {
      console.error('無法獲取商品資料:', error.response ? error.response.data : error.message);
    }
  };

  // 檢查 product 是否已加載
  if (!product) {
    return <div>載入中...</div>; // 加載時的提示
  }

    // 在 handleAddToCart 中將選擇的商品加入購物車
    const handleAddToCart = () => {
      console.log('Adding to cart'); // 調試用
      const cartKey = isMember ? 'memberCart' : 'guestCart';
      const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
  
      const newItem = {
        product_id: product.product_id,
        product_name: product.product_name,
        main_type_Chinese: product.main_type_Chinese,
        product_code: product.product_code,
        capacity: product.capacity,
        cart_qty: product.cart_qty,
        price: product.price,
        img_url: product.img_url,
        quantity: product.quantity
      }

      const itemExists = cartItems.some(item => item.product_id === newItem.product_id)
      if (!itemExists) {
        cartItems.push(newItem)
        localStorage.setItem(cartKey, JSON.stringify(cartItems));
      }
  
      setPopSwitch(true) // 顯示彈跳購物車
    };

  return (
    <div className='main-content'>
      <Header />
      <main className="product_container">
        <div className="product-image">
          <img src={product.img_url || require('../../img/products/test1.jpg')} alt="Product Pic" />
        </div>
        <div className="product_info">
          <i className="bi bi-bookmark-star"></i>
          <h3>{product.product_name || '商品名稱'}</h3>
          {/* <h3>荒野之息香水</h3> */}
          <div id="ml">
            <p>容量選擇</p>
            <div id="btn_group">
              <button onClick={() => handleCapacityChange(30)}>30ml</button>
              <button onClick={() => handleCapacityChange(50)}>50ml</button>
              <button onClick={() => handleCapacityChange(100)}>100ml</button>
            </div>
            <br />
            <div className="price">
              <div className="price_L">
                <p>售價</p>
              </div>
              <div className="price_R">
                <span>NT&emsp;</span>
                {/* <span>5000</span> */}
                <span>{price || '價格'}</span>
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
              {/* <span> 男香 </span>&ensp; */}
              {/* <span> / </span> */}
              <span> {product.main_type_Chinese || '類別名稱'} </span>
            </div>
            <div class="cart">
              {/* 下拉選單 */}
              {/* 數量:
              <select id="quantity" name="quantity" class="quantity-select">
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select> */}
              <button className="product-button" onClick={handleAddToCart}>加入購物車</button>
            </div>
          </div>
        </div>
      </div>

      {popSwitch && (<PopCart onClose={switchPop} />)}
      <Recommend /> {/* 推薦區域 */}
      <Footer />
    </div>
  );
}

export default Product;