import '../../style/Takk.css'
import { Link } from 'react-router-dom';
import PopCards from '../popCards';

const CartReview = () => {
    return (
        <div>
            <div className="horizontallyCenter">
                <h2>購物車</h2>
            </div>
            {/* each所選商品資料 */}
            <div>
                {/* popCards */}
                <PopCards />
            </div>
            <div>
                <div className="vertical">
                    {/* 往cartOrder */}
                    <Link to = '/cart'>
                        <button className="cartBottom">檢視購物車</button>
                    </Link>
                    {/* 往商品頁 */}
                    <Link to = '/product'>
                        <button className="cartBottom">繼續購物</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartReview;