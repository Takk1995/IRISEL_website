import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/header';
import ProductCard from '../../components/productList/index';
import Footer from '../../components/footer';
import '../../style/product.css';


// 主要的 Catalog 組件
const Catalog = () => {
    // 商品資料--假資料
    // const products = [
    //     {
    //         image: require('../../img/products/test1.jpg'), 
    //         title: '暮光之影香水',
    //         description: '這是款令人難忘的香水，散發著迷人的香氣。',
    //     },
    //     {
    //         image: require('../../img/products/test2.jpg'),
    //         title: '躍動微風香水',
    //         description: '這款香水充滿活力，讓您感受到青春的氣息。',
    //     },
    //     {
    //         image: require('../../img/products/test3.jpg'),
    //         title: '迷霧初晨香水',
    //         description: '這款香水以優雅著稱，讓您成為聚會的焦點。',
    //     },
    //     {
    //         image: require('../../img/products/test4.jpg'),
    //         title: '月光絮語香水',
    //         description: '散發著柔和與神秘的香氣，彷彿在月下低語，帶來寧靜的氛圍。',
    //     },
    //     {
    //         image: require('../../img/products/test5.jpg'),
    //         title: '晨曦花瓣香水',
    //         description: '混合了清新的花香與淡淡的果香，象徵著新的開始與希望，像是清晨的第一縷陽光。',
    //     },
    //     {
    //         image: require('../../img/products/test6.jpg'),
    //         title: '海洋幻影香水',
    //         description: '融合海洋的清新與自由，讓人感受到海風的輕撫，帶來無限的想像與遙遠的旅行感。',
    //     },
    //     {
    //         image: require('../../img/products/test4.jpg'), 
    //         title: '晨曦微光香水',
    //         description: '這款香水充滿了清新的氣息，讓您感受到晨曦的魅力。',
    //         alt: '香水 7',
    //       },
    //       {
    //         image: require('../../img/products/test5.jpg'), 
    //         title: '悠然秋歌香水',
    //         description: '這款香水讓您感受到優雅與寧靜。',
    //         alt: '香水 8',
    //       },
    //       {
    //         image: require('../../img/products/test6.jpg'), 
    //         title: '夜晚魅影香水',
    //         description: '這款香水為夜晚帶來神秘與魅力。',
    //         alt: '香水 9',
    //       },
    // ];

    const [products, setProducts] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(''); 

    // 確保 selectedType 在組件的初始化過程中設置了一個有效的值，否則 fetchProductsByType 可能不會被調用。
    // 在這裡添加 useEffect
      useEffect(() => {
        setSelectedType(1); // // 初始設置一個有效的 main_type_id（例如 1）
    }, []);

    // 當 selectedType 改變時，取得對應的商品資料
    useEffect(() => {
        if (selectedType) {
            fetchProductsByType(selectedType);
        }
    }, [selectedType]);

    // 透過 main_type_id 取得商品資料
    const fetchProductsByType = async (mainTypeId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/catalog?main_type_id=${mainTypeId}`);
            
            // 使用 Set 來儲存已經出現的 product_name
            const uniqueProducts = response.data.reduce((acc, current) => {
                // 如果 acc 中沒有 current.product_name，就將其添加到 acc
                if (!acc.some(product => product.product_name === current.product_name)) {
                    acc.push(current);
                }
                return acc;
            }, []);
            
            setProducts(uniqueProducts);

            // 更新當前顯示的分類名稱，從第一筆資料中獲取 main_type_Chinese
            if (uniqueProducts.length > 0) {
                setCurrentCategory(uniqueProducts[0].main_type_Chinese);
            }

        } catch (error) {
            console.error('無法取得商品資料', error);
        }
    };

    // 處理分類按鈕的點擊事件
    const handleTypeSelect = (typeId) => {
        setSelectedType(typeId);
    };

    return (
        <div className='catalog-content'>
            <Header />

            <div className="filter-container">
                <p className="category-label">香氛調性</p>
                <div className="filter-buttons">
                    <div className="filter-row">
                        {/* <button className="filter-button category-basis">香氛調性</button> */}
                        <button className="filter-button small-category small-category-group" onClick={() => handleTypeSelect(1)}>花香調</button>
                        <button className="filter-button small-category small-category-group" onClick={() => handleTypeSelect(2)}>木質調</button>
                        <button className="filter-button small-category small-category-group" onClick={() => handleTypeSelect(3)}>東方香調</button>
                        <button className="filter-button small-category small-category-group" onClick={() => handleTypeSelect(4)}>清新調</button>
                    </div>

                    {/* <div className="divider"></div>

                    <div className="filter-row">
                        <button className="filter-button category-basis">適合對象</button>
                        <button className="filter-button small-category small-category-group">女性香氛</button>
                        <button className="filter-button small-category small-category-group">男性香氛</button>
                        <button className="filter-button small-category small-category-group">中性香氛</button>
                    </div> */}
                </div>
            </div>

            <div className="centered-text">
                <span>目前顯示的分類為:&ensp;&ensp;</span>
                <span>{currentCategory}</span>
            </div>

            <div className="cardlist">
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard
                                key={product.product_id}
                                image={product.img_url}
                                title={product.product_name}
                                description={product.summary}
                                productCode={product.product_code} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Catalog;