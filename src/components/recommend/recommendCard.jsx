import React from 'react';
import '../../style/product.css';

// RecommendCard 是用於推薦商品的卡片組件
const RecommendCard = ({ title, description, image, productCode }) => {
    return (
        <div className="pro_card">
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

export default RecommendCard;