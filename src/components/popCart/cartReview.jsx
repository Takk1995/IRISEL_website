import '../../style/Takk.css'
import img from '../../img/test.png'

function CartReview() {
    return (
        <div>
            {/* each所選商品資料 */}
            <div className="horizontally">
                <div>
                    <img src={img} alt='' className="cartImg" />
                </div>
                <div>
                    <div>
                        <a href="" className="vertical">
                            <span className='cartTitle'>商品名稱</span>
                            <span>商品系列</span>
                        </a>
                    </div>
                    <div>
                        <div>
                            <p>數量</p>
                        </div>
                        <div>
                            <p>NT$</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 總金額 */}
            <div>
                <div className="horizontallySpaceBetween">
                    <div>
                        <p>小計</p>
                    </div>
                    <p>NT$</p>
                </div>
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