import React, {useState, useEffect} from 'react';
import '../../style/Takk.css';
import Header from '../../components/header'
import CartProgressBar from '../../components/cartProgressBar';
import CartFooter from '../../components/cartFooter';
import CartOrder from './cartOrder';
import CartCheckOut from './cartCheckOut';
import CartConfirmation from './cartConfirmation';


function ShoppingCart() {
    // 0:Order 1:CheckOut 2:Confirmation

    return (
        <div>
            {/* <Header/> */}
            <div>
                <CartProgressBar/>
            </div>
            <div>
            <CartOrder/>
            </div>
            <CartFooter/>
        </div>
    );
}

export default ShoppingCart;