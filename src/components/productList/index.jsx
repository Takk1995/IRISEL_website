import React from 'react';
import '../../style/product.css';

// ProductCard 是一個單一的商品卡片組件
const ProductCard = ({ title, description, image }) => {
    return (
        <div className="pro_card">
            <img src={image} alt={title} />
            <div className="card_body">
                <h4 className="card_title">{title}</h4>
                <p className="card_text">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;