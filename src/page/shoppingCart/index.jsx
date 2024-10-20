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
                <CartProgressBar />
            </div>
            <div>
                {cartStep === 0 && (
                    <CartOrder onPackage={handlePackageChoose} onNext={goToCheckOut} />
                )}
                {cartStep === 1 && (
                    <CartCheckOut selectPackage={selectPackage} onNext={goToConfirmation} onBack={backToOrder} />
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