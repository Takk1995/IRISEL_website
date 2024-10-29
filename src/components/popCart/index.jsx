import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../style/Takk.css'
import CartDefault from './cartDefault'
import CartReview from './cartReview'

const PopCart = ({onClose}) => {
    // 0:Default 1:Review
    const [data, setData] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [isMember] = useState(false)
    const [fetchedItems, setFetchedItems] = useState([])

    // 會員/訪客
    useEffect(() => {
        const fetchCartItems = () => {
            const key = isMember ? 'memberCart' : 'guestCart'
            const items = JSON.parse(localStorage.getItem(key)) || []
            setCartItems(items)
        }
        fetchCartItems()
    }, [isMember])

    // 0:沒資料 1:有資料
    useEffect(() => {
        if(cartItems.length === 0) {
            setData(0)
        } else {
            setData(1)
            fetchItemsData(cartItems)
        }
    },[cartItems])

    // 購物車中商品的資料
    const fetchItemsData = async(items) => {   
        if (items.length === 0) {
            return
        }
        const itemIds = items.map(item => item.product_id)
        try {
            const response = await axios.post('http://localhost:8000/api/cartItem', {itemIds})
            setFetchedItems(response.data)
            console.log(response.data);
            
        } catch (error) {
            console.error(error)
        }
    }

    // 點到 pop 才不會關閉
    const handleMaskClick = (e) => {
        if(e.target.className === 'popMask') {
            onClose();
        }
    }

    return (
        <div className="popMask" onClick={handleMaskClick}>
            <div className="pop">
                <div>
                    <div className="popClose" onClick={onClose}>X</div>
                </div>
                {data === 0 && (
                    <CartDefault />
                )}
                {data === 1 && (
                    <CartReview cartItems={fetchedItems} />
                )}
            </div>
        </div>
    );
}

export default PopCart;