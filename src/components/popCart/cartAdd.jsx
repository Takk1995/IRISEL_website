import { useState } from 'react'
import '../../style/Takk.css'
import img from '../../img/test.png'

const CartAdd = () => {
    const [addCard] = useState([
        { id: 1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, productNumber: '1010001' }
    ])

    const { productName, productClass, productPrice, productNumber } = addCard[0]

    return (
        <div>
            <div className='cartTop'>
                {/* 商品資料 */}
                <div>
                    <a href="" className="vertical">
                        <span className="cartTitle">{productName}</span>
                        <span>{productClass}</span>
                    </a>
                </div>
                <div>
                    <div>
                        <p>商品編號: {productNumber}</p>
                        <p>NT$ {productPrice}</p>
                    </div>
                </div>
                <hr />
                {/* 容量選擇 */}
                <div>
                    {/* form */}
                    <form action="">
                        <select name="" id="">
                            <option required>100ml</option>
                            <option>50ml</option>
                        </select>
                    </form>
                </div>
                <div className="vertical cartTop">
                    {/* 購物車加入資料並回到商品頁 */}
                    <div className='horizontallyCenter'>
                        <button className="cartBottom">新增到購物車</button>
                    </div>
                    {/* 直接往商品頁 */}
                    <div className='horizontallyCenter'>
                        <button className="cartBottom">查看更多</button>
                    </div>
                </div>
            </div>
            <div className="horizontallyCenter">
                <img src={img} alt='' className="cartImg" />
            </div>
        </div>
    );
}

export default CartAdd;