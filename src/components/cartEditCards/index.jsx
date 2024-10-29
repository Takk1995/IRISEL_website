import { useState, useEffect } from 'react';
import '../../style/Takk.css'
import CartEditCard from './cartEditCard';

const CartEditCards = ({cartItems, setCartItems, qty, setQty}) => {
    // 總和參數與設定總和的函式
    const [total, setTotal] = useState(0)

    // 依照ID 移除卡片
    const delCard = (id) => {
        setCartItems(cartItems.filter(c => c.product_id !== id))
    }

    // 更新數量時重新設定數量
    const upDateQty = (id, newQty) => {
        const refresh = cartItems.map(card => {
            if (card.product_id === id) {
                return {...card, qty: newQty}
            }
            return card
        })
        setCartItems(refresh)
        setQty(id, newQty)
    }

    // 計算總金額
    const calculatedTotal = (cards) => {
        if (!Array.isArray(cards)) {
            console.error('ERROR');
            return
        }
        const newTotal = cards.reduce((total, item) => {
            return total + (item.price * (item.qty || 1))
        }, 0);
        setTotal(newTotal)
    }

    // 編輯卡片有變動時 重新計算總金額
    useEffect(() => {
        if (Array.isArray(cartItems)) {
            calculatedTotal(cartItems)
        } else {
            console.error('ERROR')
        }
    }, [cartItems])

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return <h2 className='horizontallyCenter orderNone'>您的購物車沒有任何商品</h2>
    }

    return (
        <div>
            {cartItems.map((item, index) => (
                <div key={item.product_id}>                    
                    <CartEditCard
                        detail   = {item}
                        onDel    = {() => delCard(item.product_id)}
                        onChange = {upDateQty}
                        qty      = {qty[item.product_id] || 1}
                    />
                    {index < cartItems.length - 1 && <hr/>}
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