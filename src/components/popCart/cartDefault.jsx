import '../../style/Takk.css'

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
                                    <p>香氛</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>客製化</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>會員</p>
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