import '../../style/Takk.css'
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
                    <button className="cartBottom">檢視購物車</button>
                    {/* 往商品頁 */}
                    <button className="cartBottom">繼續購物</button>
                </div>
            </div>
        </div>
    );
}

export default CartReview;