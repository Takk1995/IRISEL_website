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
                <div className="vertical">
                    {/* 往cartOrder */}
                    <button className="cartBottom">
                        <Link to="/cart">
                            檢視購物車
                        </Link>
                    </button>
                    {/* 往商品頁 */}
                    <button className="cartBottom">
                        <Link to="/catalog">
                            繼續購物
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartReview;