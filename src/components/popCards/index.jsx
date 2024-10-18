import { useState, useEffect } from 'react';
import '../../style/Takk.css';
import PopCard from './popCard';

const PopCards = () => {
    const [popCards] = useState([
        { id: 1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, capacity: '100ml'},
        { id: 2, productName: 'TK-2', productClass: 'Class-2', productPrice: 5500, capacity: '50ml'},
        { id: 3, productName: 'TK-3', productClass: 'Class-2', productPrice: 5300, capacity: '100ml'}
    ])

    const [total, setTotal] = useState(0)

    // 計算總金額
    useEffect(() => {
        const calculatedTotal = popCards.reduce((total, item) => {
            return total + item.productPrice
        }, 0);
        setTotal(calculatedTotal);
    }, [popCards])
    
    return (
        <div>
            {popCards.map((c, index) => (
                <div key={c.id}>
                    <PopCard
                        key    = {c.id}
                        detail = {c}
                        order  = {index + 1 }
                    />
                    {index < popCards.length -1 && <hr/>}
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