import '../../style/Takk.css'

const CartProgressBar = ({cartStep}) => {
    return (
        <div>
            <div>
                <ul className="noBullets cartHeader progressBarTop">
                    <li><h2>購物車</h2></li>
                    <li><h2>結帳</h2></li>
                    <li><h2>確認</h2></li>
                </ul>
            </div>
            <div>
                <ul className="cartStepper">
                    {/* 0 */}
                    <li className={ cartStep >= 0 ? 'cartLineB' : 'cartLine'}></li>
                    <li className={ cartStep >= 0 ? 'cartCircleB' : 'cartCircle'}></li>
                    {/* 1 */}
                    <li className={ cartStep >= 1 ? 'cartLineB' : 'cartLine'}></li>
                    <li className={ cartStep >= 1 ? 'cartCircleB' : 'cartCircle'}></li>
                    {/* 2 */}
                    <li className={ cartStep === 2 ? 'cartLineB' : 'cartLine'}></li>
                    <li className={ cartStep === 2 ? 'cartCircleB' : 'cartCircle'}></li>
                    <li className={ cartStep === 2 ? 'cartLineB' : 'cartLine'}></li>
                </ul>
            </div>
        </div>
    );
}

export default CartProgressBar;