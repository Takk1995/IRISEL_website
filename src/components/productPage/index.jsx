import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = ({ productId }) => {
    const [productData, setProductData] = useState(null);
    const [capacity, setCapacity] = useState('30ml'); // 預設容量
    const [productPrices, setProductPrices] = useState({});
    const [selectedProductCode, setSelectedProductCode] = useState('');

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`/api/products/${productId}`);
                setProductData(response.data.product);
                setProductPrices(response.data.prices);
                console.log('獲取的價格:', response.data.prices); // 檢查獲取的價格
                // 設定初始的選擇商品編號 (預設為 30ml)
                const initialCode = Object.keys(response.data.prices).find(code => code[3] === '1'); // 找到30ml的代碼
                setSelectedProductCode(initialCode); // 使用找到的初始編號
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [productId]);

    const handleCapacityChange = (newCapacity) => {
        setCapacity(newCapacity);
        
        let capacityCode;
        switch (newCapacity) {
            case '30ml':
                capacityCode = '1';
                break;
            case '50ml':
                capacityCode = '2';
                break;
            case '100ml':
                capacityCode = '3';
                break;
            default:
                return;
        }

        const productNumber = productId.slice(1); // 假設商品號碼為 product_id 的第2個字元
        const newProductCode = `${productId.charAt(0)}${capacityCode}0${productNumber}`;
        setSelectedProductCode(newProductCode);
    };

    return (
        <div>
            {productData && (
                <>
                    <h1>{productData.name}</h1>
                    <p>價格: {productPrices[selectedProductCode] || '尚無價格'} 元</p>
                    <div>
                        <button onClick={() => handleCapacityChange('30ml')}>30ml</button>
                        <button onClick={() => handleCapacityChange('50ml')}>50ml</button>
                        <button onClick={() => handleCapacityChange('100ml')}>100ml</button>
                    </div>
                    {/* 其他商品詳情 */}
                </>
            )}
        </div>
    );
};

export default ProductPage;
