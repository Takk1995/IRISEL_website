// import React, {useState, useEffect} from 'react'
import '../../style/Takk.css'
import CartDefault from './cartDefault'
import CartReview from './cartReview'

const PopCart = () => {
    // 0:Default 1:Review
    // const [status, setStatus] = useState(0);

    return (
        <div className="popMask">
            <div className="pop">
                <div>
                    <div className="popClose">X</div>
                </div>
                <CartReview />
            </div>
        </div>
    );
}

export default PopCart;