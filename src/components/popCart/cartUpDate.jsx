import { useState, useEffect } from 'react';
import '../../style/Takk.css'
import img from '../../img/test.png'

const CartUpDate = () => {
    const [upDateCard] = useState([
        { id: 1, productName: 'TK-1', productClass: 'Class-1', productPrice: 5200, capacity: '100ml', cartProductQty: '', productNumber: '100100' },
        { id: 4, productName: 'TK-1-2', productClass: 'Class-1', productPrice: 2500, capacity: '50ml', cartProductQty: '', productNumber: '100101' }
    ])

    const [select, setSelect] = useState('100ml')
    const [detail, setDetail] = useState(upDateCard[0])

    // 選取select時 重新設定值
    const capacityChange = (e) => {
        setSelect(e.target.value)
    };

    // select 改變時 找到容量一樣的資料 並設定detail為該資料
    useEffect(() => {
        const refresh = upDateCard.find(item => item.capacity === select);
        if (refresh) {
            setDetail(refresh)
        } else {
            setDetail(upDateCard[0])
        }
    }, [select, upDateCard])

    return (
        <div>
            <div className='cartTop'>
                {/* 商品資料 */}
                <div>
                    <a href="" className="vertical">
                        <p className="cartTitle">{detail.productName}</p>
                        <p>{detail.productClass}</p>
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
                {/* 往cartOrder */}
                <div className="vertical cartTop">
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