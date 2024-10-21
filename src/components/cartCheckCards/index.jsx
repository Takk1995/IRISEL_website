import { useState, useEffect } from 'react';
import '../../style/Takk.css';
import CartCheckCard from './cartCheckCard';


const CartCheckCards = ({cartItem}) => {
    const [total, setTotal] = useState(0)

    // 計算總金額
    useEffect(() => {
        const calculatedTotal = cartItem.reduce((total, item) => {
            return total + item.productPrice * item.cartProductQty
        }, 0);
        setTotal(calculatedTotal);
    }, [cartItem])

    return (
        <div>
            {cartItem.map((c, index) => (
                <div key={c.id}>
                    <CartCheckCard
                        key    = {c.id}
                        detail = {c}
                        order  = {index + 1}
                    />
                    {index < cartItem.length - 1 && <hr />}
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