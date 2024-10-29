import '../../style/Takk.css'
import { Link } from 'react-router-dom';

const CartDefault = () => {
    return (
        <div>
            <div className="horizontallyCenter">
                <h2>購物車</h2>
            </div>
            <div className='vertical'>
                <div className='cartDefaultMain'>
                    <div className="horizontallyCenter">
                        <p>您的購物車沒有任何商品</p>
                    </div>
                </div>
                <div className='cartDefaultLink'>
                    <div className="horizontallyCenter">
                        <ul className="noBullets">
                            <li>
                                <div>
                                    <Link to='/catalog'>
                                        <p>香氛</p>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to='/'>
                                        <p>測驗</p>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to = '/'>
                                        <p>會員</p>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartDefault;