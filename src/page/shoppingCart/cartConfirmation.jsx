import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Takk.css';
import img from '../../img/check.png';

const CartConfirmation = () => {
    const [orderData] = useState([
        { orderNumber: 1205 }
    ])

    const { orderNumber } = orderData[0]

    return (
        <div>
            <div>
                <div className="horizontallyCenter checkOrderTop">
                    <img src={img} alt='' />
                </div>
                <div className="horizontallyCenter checkOrderTop">
                    <p>已經收到您的訂單</p>
                </div>
            </div>
            <div>
                <ul className="noBullets horizontallyCenter">
                    <li>
                        <span style={{ marginRight: '5px' }}>訂單編號:</span>
                    </li>
                    <li>
                        {/* 往訂單查詢 */}
                        <div>
                            <span>{orderNumber}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='cartBottom'>
                <ul className="noBullets">
                    <li className="horizontallyCenter">
                        <p>已完成付款</p>
                    </li>
                    <li className="horizontallyCenter">
                        <span>付款時間:</span>
                    </li>
                    <li className="horizontallyCenter">
                        <span>2024/09/25</span>
                    </li>
                </ul>
            </div>
            <div className="horizontallyCenter confirmationBottom">
                {/* 往 Home */}
                <Link to = '/'>
                    <button className='cartBottom'>返回首頁</button>
                </Link>
            </div>
        </div>
    );
}

export default CartConfirmation;