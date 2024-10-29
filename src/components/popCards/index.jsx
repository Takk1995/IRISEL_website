import { useState, useEffect } from 'react';
import '../../style/Takk.css';
import PopCard from './popCard';

const PopCards = ({items}) => {
    const [total, setTotal] = useState(0)

    // 計算總金額
    useEffect(() => {
        if (items && items.length > 0) {
            const calculatedTotal = items.reduce((total, item) => {
                return total + item.price
            }, 0);
            setTotal(calculatedTotal);
        } else {
            setTotal(0)
        }
    }, [items])
    
    return (
        <div>
            {items.map((item, index) => (
                <div key={item.product_id}>                    
                    <PopCard
                        key    = {item.product_id}
                        detail = {item}
                        order  = {index + 1 }
                    />
                    {index < items.length -1 && <hr/>}
                </div>
            ))}
            {/* 總金額 */}
            <div className='deliveryBottom'>
                <div className="horizontallySpaceBetween cartFooter popTotal">
                    <div>
                        <p>小計</p>
                    </div>
                    <p>NT$ {total}</p>
                </div>
            </div>
        </div>
    )
}

export default PopCards;