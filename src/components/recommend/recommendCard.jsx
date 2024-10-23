import React from 'react';
import '../../style/product.css';

// RecommendCard 是用於推薦商品的卡片組件
const RecommendCard = ({ title, description, image, alt }) => {
    return (
        <div className="pro_card">
            <img src={image} alt={alt} />
            <div className="card_body">
                <h4 className="card_title">{title}</h4>
                <p className="card_text">{description}</p>
            </div>
        </div>
    );
};

export default RecommendCard;