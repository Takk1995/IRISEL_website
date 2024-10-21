import { useState } from 'react';
import CartProgressBar from '../../components/cartProgressBar';
import CartFooter from '../../components/cartFooter';
import CartOrder from './cartOrder';
import CartCheckOut from './cartCheckOut';
import CartConfirmation from './cartConfirmation';


const ShoppingCart = () => {
    // 0:Order 1:CheckOut 2:Confirmation
    const [cartStep, setCartStep] = useState(0)
    const [selectPackage, setSelectPackage] = useState('')

    const [cartItem, setCartItem] = useState([
        {id:1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, capacity: '100ml', cartProductQty: '1'},
        {id:2, productName: 'TK-2', productClass: 'Class-2', productPrice: 5500, capacity: '50ml', cartProductQty: '1'},
        {id:3, productName: 'TK-3', productClass: 'Class-2', productPrice: 5300, capacity: '100ml', cartProductQty: '1'}
    ])

    const handlePackageChoose = (packageValue) => {
        setSelectPackage(packageValue)
    }

    const goToCheckOut = () => setCartStep(1)

    const goToConfirmation = () => setCartStep(2)

    const backToOrder = () => setCartStep(0)

    return (
        <div>
            {/* <Header/> */}
            <div>
                <CartProgressBar cartStep={cartStep}/>
            </div>
            <div>
                {cartStep === 0 && (
                    <CartOrder onPackage   = {handlePackageChoose}
                               onNext      = {goToCheckOut}
                               cartItem    = {cartItem}
                               setCartItem = {setCartItem}
                    />
                )}
                {cartStep === 1 && (
                    <CartCheckOut selectPackage = {selectPackage}
                                  onNext        = {goToConfirmation}
                                  onBack        = {backToOrder}
                                  cartItem      = {cartItem}
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