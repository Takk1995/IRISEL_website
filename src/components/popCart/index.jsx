import { useState, useEffect } from 'react'
import '../../style/Takk.css'
import CartDefault from './cartDefault'
import CartReview from './cartReview'

//  不確定Add 要弄進來 還是 切出去
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

    // 0:沒資料 1:有資料
    useEffect(() => {
        if(cartItems.length === 0) {
            setData(1)
        } else {
            setData(0)
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