import '../../style/Takk.css'

function CartDefault() {
    return (
        <div>
            <div>
                <div className="horizontallyCenter">
                    <p>您的購物車沒有任何商品</p>
                </div>
            </div>
            <div>
                <div className="horizontallyCenter">
                    <ul className="noBullets">
                        <li>
                            <a href="">
                                <span>香氛</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>測驗</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>會員</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CartDefault;