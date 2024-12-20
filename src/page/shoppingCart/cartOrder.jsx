import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../style/Takk.css'
import bag from '../../img/picbag.webp'
import box from '../../img/picbox.webp'
import CartEditCards from '../../components/cartEditCards'

function CartOrder({cartItems, setCartItems, onPackage, onNext}) {    
    const [choose, setChoose] = useState(null)
    
    // 把選擇哪個包裝傳遞到父元件
    const chooseChange = (e) => {
        const packageValue = e.target.value === "簡約包裝" ? 1 : 0;
        onPackage(packageValue)
        setChoose(1)

        localStorage.setItem('productPackage', packageValue)
    }
    
    const guestCart = JSON.parse(localStorage.getItem('guestCart'))

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
                <CartEditCards cartItems={cartItems} setCartItems={setCartItems}/>
            </div>
            {/* 包裝選擇 */}
            {guestCart && Array.isArray(guestCart) && guestCart.length > 0 && (
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
                            <img src={bag} alt='' className="cartImg" />
                            <label htmlFor="simple" className="packageLable"  style={{paddingLeft:'15px'}}>
                                <h4>簡約包裝</h4>
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
                            <img src={box} alt='' className="cartImg" />
                            <label htmlFor="classic" className="packageLable"  style={{paddingLeft:'15px'}}>
                                <h4>經典包裝</h4>
                                <p>經典禮盒或禮袋。</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            )}
            <div className='verticalCenter cartBottom'>
                {/* 往cartCheckOut */}
                <button className="cartBottom cartBtn" style={{width:'230px'}} onClick={onNext} disabled={!choose || cartItems.length === 0}>
                    <span className='btnSpan'>前往結帳</span>
                </button>
                {/* 返回商品頁 */}
                <button className='cartBtn' style={{width:'230px'}}>
                    <Link to = '/catalog' style={{textDecoration:'none'}}>
                        <span className='btnSpan'>繼續購物</span>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default CartOrder;