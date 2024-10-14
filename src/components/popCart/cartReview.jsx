import '../../style/Takk.css'

function CartReview() {
    return (
        <div>
            <div className="horizontally">
                <div>
                    <img src="../../img/test.png" className="cartImg" />
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
                    <button className="btnBottom">檢視購物車</button>
                    <button className="btnBottom">繼續購物</button>
                </div>
            </div>
        </div>
    );
}

export default CartReview;