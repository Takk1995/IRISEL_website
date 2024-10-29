import { useState, useEffect } from 'react';
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
    const [qty, setQty] = useState({})
    const [isMember] = useState(false)
    

    // 選了哪個包裝
    const handlePackageChoose = (packageValue) => {
        setSelectPackage(packageValue)
    }

    // 改變進度
    const goToCheckOut = () => setCartStep(1)
    const goToConfirmation = () => setCartStep(2)
    const backToOrder = () => setCartStep(0)

    useEffect(() => {
        const key = isMember ? 'memberCart' : 'guestCart'
        const items = JSON.parse(localStorage.getItem(key)) || [];
        setCartItems(items);
    }, [isMember])

    const upDateQty = (id, newQty) => {
        setQty((prevQty) => ({ ...prevQty, [id]: newQty}))
    }

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
                               cartItems    = {cartItems}
                               setCartItems = {setCartItems}
                               qty          = {qty}
                               setQty       = {upDateQty}
                    />
                )}
                {cartStep === 1 && (
                    <CartCheckOut selectPackage = {selectPackage}
                                  onNext        = {goToConfirmation}
                                  onBack        = {backToOrder}
                                  cartItems     = {cartItems}
                                  qty           = {qty}
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