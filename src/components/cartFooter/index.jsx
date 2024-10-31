import '../../style/Takk.css'

const CartFooter = () => {
    return (
        <div className="cartFooter">
            <div className='cartFooterPaddingTop'>
                <div className="horizontallyCenter">
                    <h2>付款方式</h2>
                </div>
                <div>
                    <ul className="noBullets horizontallyCenter">
                        <li className="cartFooterLi">
                            <span>visa</span>
                        </li>
                        <li className="cartFooterLi">
                            <span>visa</span>
                        </li>
                        <li className="cartFooterLi">
                            <span>visa</span>
                        </li>
                        <li className="cartFooterLi">
                            <span>visa</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="horizontallyCenter">
                <h2>安全付款</h2>
            </div>
            <div className='cartFooterPaddingBottom'>
                <span className="horizontallyCenter">您的信用卡資訊安全無虞。</span>
                <span className="horizontallyCenter">所有資訊接受安全通訊端層(SSL)技術妥善防護。</span>
            </div>
        </div>
    );
}

export default CartFooter;