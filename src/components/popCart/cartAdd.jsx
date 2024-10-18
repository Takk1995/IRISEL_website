import { useState, useEffect } from 'react'
import '../../style/Takk.css'
import img from '../../img/test.png'

const CartAdd = () => {
    const [addCard] = useState([
        { id: 1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, capacity: '100ml', cartProductQty: '', productNumber: '100100' },
        { id: 4, productName: 'TK-1-2', productClass: 'Class-1', productPrice: 2500, capacity: '50ml', cartProductQty: '', productNumber: '100101' }
    ])

    const [select, setSelect] = useState('100ml')
    const [detail, setDetail] = useState(addCard[0])

    // 選取select時 重新設定值
    const capacityChange = (e) => {
        setSelect(e.target.value)
    };

    // select 改變時 找到容量一樣的資料 並設定detail為該資料
    useEffect(() => {
        const refresh = addCard.find(item => item.capacity === select);
        if (refresh) {
            setDetail(refresh)
        } else {
            setDetail(addCard[0])
        }
    }, [select, addCard])

    return (
        <div>
            <div className='cartTop'>
                {/* 商品資料 */}
                <div>
                    <a href="" className="vertical">
                        <span className="cartTitle">{detail.productName}</span>
                        <span>{detail.productClass}</span>
                    </a>
                </div>
                <div>
                    <div>
                        <p>商品編號: {detail.productNumber}</p>
                        <p>NT$ {detail.productPrice}</p>
                    </div>
                </div>
                <hr />
                {/* 容量選擇 */}
                <div>
                    <select value={select} onChange={capacityChange}>
                        <option value='100ml'>100ml</option>
                        <option value='50ml'>50ml</option>
                    </select>
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