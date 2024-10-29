import React from 'react';
import '../../style/product.css';

// ProductCard 是一個單一的商品卡片組件
const ProductCard = ({ title, description, image, productCode }) => {
    return (
        <div className="pro_card"> {/* 使用 div 來包裹整個卡片 */}
            <a href={`/product/${productCode}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* 使用 a 標籤進行跳轉 */}
                <img src={image} alt={title} />
                <div className="card_body">
                    <h4 className="card_title">{title}</h4>
                    <p className="card_text">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;