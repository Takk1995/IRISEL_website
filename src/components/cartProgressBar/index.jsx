import '../../style/Takk.css'

function CartProgressBar() {
    // 0:Order 1:CheckOut 2:Confirmation
    
    return (
        <div>
            <div>
                <ul className="noBullets cartHeader">
                    <li><h2>購物車</h2></li>
                    <li><h2>結帳</h2></li>
                    <li><h2>確認</h2></li>
                </ul>
            </div>
            <div>
                <ul className="cartStepper">
                    {/* 購物車 */}
                    <li className="cartLine"></li>
                    <li className="cartCircle"></li>
                    {/* 結帳 */}
                    <li className="cartLine"></li>
                    <li className="cartCircle"></li>
                    {/* 確認 */}
                    <li className="cartLine"></li>
                    <li className="cartCircle"></li>
                    <li className="cartLine"></li>
                </ul>
            </div>
        </div>
    );
}

export default CartProgressBar;