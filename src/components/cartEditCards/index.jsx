import { useState, useEffect } from 'react';
import '../../style/Takk.css'
import CartEditCard from './cartEditCard';

const CartEditCards = ({cartItem, setCartItem}) => {
    // 總和參數與設定總和的函式
    const [total, setTotal] = useState(0)

    // 依照ID 移除卡片
    const delCard = (id) => {
        setCartItem(cartItem.filter(c => c.id !== id))
    }

    // 更新數量時重新設定數量
    const upDateQty = (id, qty) => {
        const refresh = cartItem.map(card => {
            if (card.id === id) {
                return {...card, cartProductQty: qty}
            }
            return card
        });
        setCartItem(refresh);
        calculatedTotal(refresh)
    }

    // 計算總金額
    const calculatedTotal = (cards) => {
        if (!Array.isArray(cards)) {
            console.error('ERROR');
            return
        }
        const newTotal = cards.reduce((total, item) => {
            return total + (item.productPrice * (item.cartProductQty || 1))
        }, 0);
        setTotal(newTotal)
    }

    // 編輯卡片有變動時 重新計算總金額
    useEffect(() => {
        if (Array.isArray(cartItem)) {
            calculatedTotal(cartItem)
        } else {
            console.error('ERROR')
        }
    }, [cartItem])

    if (!Array.isArray(cartItem) || cartItem.length === 0) {
        return <h2 className='horizontallyCenter orderNone'>您的購物車沒有任何商品</h2>
    }

    return (
        <div>
            {cartItem.map((c, index) => (
                <div key={c.id}>                    
                    <CartEditCard
                        key      = {c.id}
                        detail   = {c}
                        onDel    = {() => delCard(c.id)}
                        onChange = {upDateQty}
                    />
                    {index < cartItem.length - 1 && <hr/>}
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