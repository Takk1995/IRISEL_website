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
                        <p style={{color: 'rgb(112, 112, 112)'}}>您的購物車沒有任何商品</p>
                    </div>
                </div>
                <div className='cartDefaultLink'>
                    <div className="horizontallyCenter">
                        <ul className="noBullets">
                            <li>
                                <div>
                                    <Link to='/catalog' style={{textDecoration:'none'}}>
                                        <p className='changeLink'>香氛</p>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to='/Quiz' style={{textDecoration:'none'}}>
                                        <p className='changeLink'>測驗</p>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to = '/' style={{textDecoration:'none'}}>
                                        <p className='changeLink'>會員</p>
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