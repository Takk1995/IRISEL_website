import { useState, useEffect } from 'react';
import '../../style/Takk.css';
import CartCheckCard from './cartCheckCard';


const CartCheckCards = ({cartItems}) => {
    const [total, setTotal] = useState(0)

    // 計算總金額
    useEffect(() => {
        console.log('A', cartItems);
        
        const calculatedTotal = cartItems.reduce((total, item) => {
            return total + item.price * (item.cart_qty || 1)
        }, 0);
        setTotal(calculatedTotal);
    }, [cartItems])

    return (
        <div>
            {cartItems.map((item, index) => (
                <div key={item.id}>
                    <CartCheckCard
                        detail = {item}
                        order  = {index + 1}
                    />
                    {index < cartItems.length - 1 && <hr />}
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