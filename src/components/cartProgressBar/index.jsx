import '../../style/Takk.css'

function CartProgressBar() {
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
                    <li className="cartLine"></li>
                    <li className="cartCircle"></li>
                    <li className="cartLine"></li>
                    <li className="cartCircle"></li>
                    <li className="cartLine"></li>
                    <li className="cartCircle"></li>
                    <li className="cartLine"></li>
                </ul>
            </div>
        </div>
    );
}

export default CartProgressBar;