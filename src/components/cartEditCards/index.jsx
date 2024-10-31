import { useState, useEffect } from 'react';
import '../../style/Takk.css'
import CartEditCard from './cartEditCard';

const CartEditCards = ({ cartItems, setCartItems }) => {
    // console.log('1', cartItems);
    // 總和參數與設定總和的函式
    const [total, setTotal] = useState(0)

    // 依照ID 移除卡片
    const delCard = (id) => {
        setCartItems(cartItems.filter(c => c.product_id !== id))
    }

    // 更新數量時重新設定數量
    const upDateQty = (currentDetail, product_id, newQty) => {
        setCartItems(items => {
            // console.log('3', items)
            const updatedItems = items.map(item =>
                item.product_id === product_id ? {
                    ...item,
                    product_id: currentDetail.product_id,
                    product_name: currentDetail.product_name,
                    main_type_Chinese: currentDetail.main_type_Chinese,
                    product_code: currentDetail.product_code,
                    img_url: currentDetail.img_url,
                    price: currentDetail.price,
                    cart_qty: newQty
                } : item
            )
            // console.log('4', updatedItems);

            return updatedItems
        })
    }

    // 計算總金額
    const calculatedTotal = (cartItems) => {
        const totalAmount = cartItems.reduce((total, item) => {
            return total + (item.price * (item.cart_qty || 1))
        }, 0)
        setTotal(totalAmount)
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
    } else {
        // console.log('1223', cartItems);
    }

    return (
        <div>
            {cartItems.map((item, index) => (
                <div key={item.product_id}>
                    <CartEditCard
                        detail   = {item}
                        onDel    = {() => delCard(item.product_id)}
                        onChange = {upDateQty}
                        total    = {calculatedTotal}
                    />
                    {index < cartItems.length - 1 && <hr />}
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