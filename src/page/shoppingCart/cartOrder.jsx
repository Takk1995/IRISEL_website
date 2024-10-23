import '../../style/Takk.css'
import img from '../../img/test.png'
import CartEditCards from '../../components/cartEditCards';
import { useState } from 'react';

function CartOrder({cartItem, setCartItem, onPackage, onNext}) {
    const [choose, setChoose] = useState(null)

    // 把選擇哪個包裝傳遞到父元件
    const chooseChange = (e) => {
        const packageValue = e.target.value === "簡約包裝";
        onPackage(packageValue)    
        setChoose(1)    
    }
    
    return (
        <div className='cartMargin'>
            <div>
                <h2>訂單摘要</h2>
                <ul className="noBullets">
                    <li className="orderLine"></li>
                </ul>
            </div>
            {/* each所選商品資料 */}
            <div>
                {/* cartEditCards */}
                <CartEditCards cartItem={cartItem} setCartItem={setCartItem} />
            </div>
            {/* 包裝選擇 */}
            {cartItem.length > 0 && (
                <div>
                <div>
                    <h2>包裝</h2>
                    <ul className="noBullets">
                        <li className="orderLine"></li>
                    </ul>
                </div>
                <div className="packageBar">
                    <ul className="noBullets">
                        <li className="packageBorder">
                            <input type      = "radio"
                                   name      = "package"
                                   id        = "simple"
                                   className = "packageInp"
                                   value     = "簡約包裝"
                                   onChange  = {chooseChange}
                            />
                            <img src={img} alt='' className="cartImg" />
                            <label htmlFor="simple" className="packageLable">
                                <p>簡約包裝</p>
                                <p>使用可回收材質，並內含有機棉收納袋。</p>
                            </label>
                        </li>
                        <li className="packageBorder">
                            <input type      = "radio"
                                   name      = "package"
                                   id        = "classic"
                                   className = "packageInp"
                                   value     = "經典包裝"
                                   onChange  = {chooseChange}
                            />
                            <img src={img} alt='' className="cartImg" />
                            <label htmlFor="classic" className="packageLable">
                                <p>經典包裝</p>
                                <p>經典禮盒或禮袋。</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            )}
            <div>
                {/* 往cartCheckOut */}
                <div className="horizontallyCenter">
                    <button className="cartBottom" onClick={onNext} disabled={!choose || cartItem.length === 0}>前往結帳</button>
                </div>
                {/* 返回商品頁 */}
                <div className="horizontallyCenter cartBottom">
                    <a href="">
                        <span>繼續購物</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CartOrder;