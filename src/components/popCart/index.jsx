import React, {useState, useEffect} from 'react'
import '../style/Takk.css'
import CartDefault from './cartDefault'
import CartReview from './cartReview'
import CartAdd from './cartAdd'
import CartUpDate from './cartUpDate'

function PopCart() {
    let x = [0];
    // 0:Default 1:Review 2:Add 3:UpDate
    const [status, setStatus] = useState(0);

    return (
        <div className="popMask">
            <div className="pop">
                <div>
                    <div className="popClose">X</div>
                </div>
                {

                }
            </div>
        </div>
    );
}

export default PopCart;