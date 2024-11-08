import '../../style/Takk.css'
import { Link } from 'react-router-dom';
import PopCards from '../popCards';

const CartReview = ({ cartItems }) => {
    return (
        <div>
            <div className="horizontallyCenter">
                <h2>購物車</h2>
            </div>
            {/* each所選商品資料 */}
            <div>
                {/* popCards */}
                <PopCards items={cartItems} />
            </div>
            <div>
                <div className="verticalCenter">
                    {/* 往cartOrder */}
                    <button className="cartBottom cartBtn">
                        <Link to="/cart" style={{textDecoration:'none'}}>
                            <span className='btnSpan'>
                                檢視購物車
                            </span>
                        </Link>
                    </button>
                    {/* 往商品頁 */}
                    <button className="cartBottom cartBtn">
                        <Link to="/catalog">
                            <span className='btnSpan'>
                                繼續購物
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartReview;