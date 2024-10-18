import { useState, useEffect } from 'react';
import '../../style/Takk.css'
import CartEditCard from './cartEditCard';

const CartEditCards = () => {
    const [cartEditCards, setCartEditCards] = useState([
        {id:1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, capacity: '100ml'},
        {id:2, productName: 'TK-2', productClass: 'Class-2', productPrice: 5500, capacity: '50ml'},
        {id:3, productName: 'TK-3', productClass: 'Class-2', productPrice: 5300, capacity: '100ml'}
    ])

    // 總和參數與設定總和的函式
    const [total, setTotal] = useState(0)

    // 依照ID 移除卡片
    const delCard = (id) => {
        setCartEditCards(cartEditCards.filter(c => c.id !== id))
    }

    // 更新數量時重新設定數量
    const upDateQty = (id, qty) => {
        const refresh = cartEditCards.map(card => {
            if (card.id === id) {
                return {...card, qty}
            }
            return card
        });
        setCartEditCards(refresh);
        calculatedTotal(refresh)
    }

    // 計算總金額
    const calculatedTotal = (cards) => {
        const newTotal = cards.reduce((total, item) => {
            return total + (item.productPrice * (item.qty || 1))
        }, 0);
        setTotal(newTotal)
    }

    // 編輯卡片有變動時 重新計算總金額
    useEffect(() => {
        calculatedTotal(cartEditCards)
    }, [cartEditCards])

    return (
        <div>
            {cartEditCards.map((c, index) => (
                <div key={c.id}>                    
                    <CartEditCard
                        key      = {c.id}
                        detail   = {c}
                        onDel    = {() => delCard(c.id)}
                        onChange = {upDateQty}
                    />
                    {index < cartEditCards.length - 1 && <hr/>}
                </div>
            ))}
            <ul className="noBullets">
                <li className="orderLine"></li>
            </ul>
            {/* 總金額 */}
            <div className="horizontally">
                <div>
                    <span>小計</span>
                </div>
                <span className="cartLeft">NT$ {total}</span>
            </div>
        </div>
    )
}

export default CartEditCards;