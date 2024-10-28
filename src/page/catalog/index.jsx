import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import ProductCard from '../../components/productList/index';
import Footer from '../../components/footer';
import '../../style/product.css';


// 主要的 Catalog 組件
const Catalog = () => {
    // 商品資料
    const products = [
        {
            image: require('../../img/products/test1.jpg'), 
            title: '暮光之影香水',
            description: '這是款令人難忘的香水，散發著迷人的香氣。',
        },
        {
            image: require('../../img/products/test2.jpg'),
            title: '躍動微風香水',
            description: '這款香水充滿活力，讓您感受到青春的氣息。',
        },
        {
            image: require('../../img/products/test3.jpg'),
            title: '迷霧初晨香水',
            description: '這款香水以優雅著稱，讓您成為聚會的焦點。',
        },
        {
            image: require('../../img/products/test4.jpg'),
            title: '月光絮語香水',
            description: '散發著柔和與神秘的香氣，彷彿在月下低語，帶來寧靜的氛圍。',
        },
        {
            image: require('../../img/products/test5.jpg'),
            title: '晨曦花瓣香水',
            description: '混合了清新的花香與淡淡的果香，象徵著新的開始與希望，像是清晨的第一縷陽光。',
        },
        {
            image: require('../../img/products/test6.jpg'),
            title: '海洋幻影香水',
            description: '融合海洋的清新與自由，讓人感受到海風的輕撫，帶來無限的想像與遙遠的旅行感。',
        },
        {
            image: require('../../img/products/test4.jpg'), // 新商品 1
            title: '晨曦微光香水',
            description: '這款香水充滿了清新的氣息，讓您感受到晨曦的魅力。',
            alt: '香水 7',
          },
          {
            image: require('../../img/products/test5.jpg'), // 新商品 2
            title: '悠然秋歌香水',
            description: '這款香水讓您感受到優雅與寧靜。',
            alt: '香水 8',
          },
          {
            image: require('../../img/products/test6.jpg'), // 新商品 3
            title: '夜晚魅影香水',
            description: '這款香水為夜晚帶來神秘與魅力。',
            alt: '香水 9',
          },
    ];

    return (
        <div className='catalog-content'>
            <Header />

            <div className="filter-container">
                <p className="category-label">分類</p>
                <div className="filter-buttons">
                    <div className="filter-row">
                        <button className="filter-button big-category">香氛調性</button>
                        <button className="filter-button small-category small-category-group">花香調</button>
                        <button className="filter-button small-category small-category-group">木質調</button>
                        <button className="filter-button small-category small-category-group">東方香調</button>
                        <button className="filter-button small-category small-category-group">清新調</button>
                    </div>

                    <div className="divider"></div>

                    <div className="filter-row">
                        <button className="filter-button big-category">適合對象</button>
                        <button className="filter-button small-category small-category-group">女性香氛</button>
                        <button className="filter-button small-category small-category-group">男性香氛</button>
                        <button className="filter-button small-category small-category-group">中性香氛</button>
                    </div>
                </div>
            </div>

            <div className="cardlist">
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard
                                key={product.id}
                                // key={index}
                                image={product.image}
                                title={product.title}
                                description={product.description}
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