import React, {useState, useEffect} from 'react';
import '../../style/Takk.css'
import CartProgressBar from '../../components/cartProgressBar'
import CartFooter from '../../components/cartFooter'


function ShoppingCart() {
    // 0:Order 1:Delivery 2:CheckOut 3:Confirmation

    return (
        <div>
            <div className=''>
                <CartProgressBar/>
            </div>
            {

            }
            <div className=''>
                <CartFooter/>
            </div>
        </div>
    );
}

export default ShoppingCart;