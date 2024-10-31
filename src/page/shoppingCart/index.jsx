import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header'
import CartProgressBar from '../../components/cartProgressBar';
import CartFooter from '../../components/cartFooter';
import CartOrder from './cartOrder';
import CartCheckOut from './cartCheckOut';
import CartConfirmation from './cartConfirmation';

const ShoppingCart = () => {
    // 0:Order 1:CheckOut 2:Confirmation
    const [cartStep, setCartStep] = useState(0)
    const [selectPackage, setSelectPackage] = useState('')
    const [cartItems, setCartItems] = useState([])
    const [fetchedItems, setFetchedItems] = useState([])
    const [isMember] = useState(false)

    useEffect(() => {
        const fetchCartItems = () => {
            const key = isMember ? 'memberCart' : 'guestCart'
            const items = JSON.parse(localStorage.getItem(key)) || []
            setCartItems(items)            
        }
        fetchCartItems()
    }, [isMember])

    const fetchItemsData = async(items) => {   
        if (items.length === 0) {
            return
        }
        const itemIds = items.map(item => item.product_id)
        try {
            const response = await axios.post('http://localhost:8000/api/cartItem', {itemIds})
            const updatedItems = response.data.map(fetchedItem => {
                const cartItem = items.find(item => item.product_id === fetchedItem.product_id)
                return {...fetchedItem, cart_qty: cartItem.cart_qty}
            })
            setFetchedItems(updatedItems)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchItemsData(cartItems)
    }, [cartItems])
    

    // 選了哪個包裝
    const handlePackageChoose = (packageValue) => {
        setSelectPackage(packageValue)
    }

    // 改變進度
    const goToCheckOut = () => setCartStep(1)
    const goToConfirmation = () => setCartStep(2)
    const backToOrder = () => setCartStep(0)

    return (
        <div>
            <Header/>
            <div>
                <CartProgressBar cartStep={cartStep}/>
            </div>
            <div>
                {cartStep === 0 && (
                    <CartOrder onPackage    = {handlePackageChoose}
                               onNext       = {goToCheckOut}
                               cartItems    = {fetchedItems}
                               setCartItems = {setCartItems}
                    />
                )}
                {cartStep === 1 && (
                    <CartCheckOut selectPackage = {selectPackage}
                                  onNext        = {goToConfirmation}
                                  onBack        = {backToOrder}
                                  cartItems     = {cartItems}
                    />
                )}
                {cartStep === 2 && (
                    <CartConfirmation />
                )}
            </div>
            <CartFooter />
        </div>
    );
}

export default ShoppingCart;