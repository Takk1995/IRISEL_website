import { useState } from 'react';
import '../../style/Takk.css'
import img from '../../img/test.png'

const CartUpDate = () => {
    const [upDateCard] = useState([
        { id: 1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, productNumber: '1010001' }
    ])

    const { productName, productClass, productPrice, productNumber } = upDateCard[0]

    return (
        <div>
            <div className='cartTop'>
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
                    {/* 往cartOrder */}
                    <button className='cartBottom'>更新購物車</button>
                </div>
            </div>
            <div className="horizontallyCenter">
                <img src={img} alt='' className="cartImg" />
            </div>
        </div>
    );
}

export default CartUpDate;