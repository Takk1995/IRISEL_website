import { useState, useEffect } from 'react';
import '../../style/Takk.css';
import PopCard from './popCard';

const PopCards = () => {
    const [popCards] = useState([
        {
            product_id:'',
            product_name:'',
            main_type_Chinese:'',
            img_url:'',
            product_code:'',
            capacity: '',
            price: ''
        }
    ])

    const [total, setTotal] = useState(0)

    // 計算總金額
    useEffect(() => {
        const calculatedTotal = popCards.reduce((total, item) => {
            return total + item.price
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