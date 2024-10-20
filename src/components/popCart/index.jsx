import { useState, useEffect } from 'react'
import '../../style/Takk.css'
import CartDefault from './cartDefault'
import CartReview from './cartReview'

const PopCart = () => {
    // 0:Default 1:Review
    const [data, setData] = useState(0)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const fetchCartItems = () => {
            // 這裡是 API 拿資料
            // API....

            const items = [] // 假設這是從 API 獲取的資料
            setCartItems(items)
        }
        fetchCartItems()
    }, [])

    useEffect(() => {
        if(cartItems.length === 0) {
            setData(0)
        } else {
            setData(1)
        }
    },[cartItems])

    return (
        <div className="popMask">
            <div className="pop">
                <div>
                    <div className="popClose">X</div>
                </div>
                {data === 0 && (
                    <CartDefault />
                )}
                {data === 1 && (
                    <CartReview />
                )}
            </div>
        </div>
    );
}

export default PopCart;