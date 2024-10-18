import { useState, useEffect } from 'react';
import '../../style/Takk.css';
import CartCheckCard from './cartCheckCard';


const CartCheckCards = () => {
    const [checkCards] = useState([
        { id: 1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, capacity: '100ml', cartProductQty: '1' },
        { id: 2, productName: 'TK-2', productClass: 'Class-2', productPrice: 5500, capacity: '50ml', cartProductQty: '2' },
        { id: 3, productName: 'TK-3', productClass: 'Class-2', productPrice: 5300, capacity: '100ml', cartProductQty: '1' }
    ])

    const [total, setTotal] = useState(0)

    // 計算總金額
    useEffect(() => {
        const calculatedTotal = checkCards.reduce((total, item) => {
            return total + item.productPrice * item.cartProductQty
        }, 0);
        setTotal(calculatedTotal);
    }, [checkCards])

    return (
        <div>
            {checkCards.map((c, index) => (
                <div key={c.id}>
                    <CartCheckCard
                        key    = {c.id}
                        detail = {c}
                        order  = {index + 1}
                    />
                    {index < checkCards.length - 1 && <hr />}
                </div>
            ))}
            <ul className="noBullets">
                <li className="orderLine"></li>
            </ul>
            {/* 總金額 */}
            <div className="horizontally cartBottom">
                <div>
                    <span>小計</span>
                </div>
                <span className="cartLeft">NT$ {total}</span>
            </div>
        </div>
    )
}

export default CartCheckCards;