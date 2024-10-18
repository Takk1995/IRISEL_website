import { useState } from 'react';
import '../../style/Takk.css'
import img from '../../img/test.png'

const CartEditCard =({detail, onDel, onChange}) => {
    const { id, productName, productClass, capacity, productPrice } = detail;
    const [qty, setQty] = useState(1)

    // 移除
    const del = () => {
        onDel(id);
    }

    // select改變時 設定為新的數量
    const qtyChange = (e) => {
        const newQty = parseInt(e.target.value, 10);
        setQty(newQty);
        onChange(id, newQty) // 傳回
    }

    return (
        <div>
            <div className="horizontally">
                <div>
                    <img src={img} alt='' className="cartImg" />
                </div>
                <div style={{ width: '100%' }}>
                    <div className="horizontally">
                        <div>
                            {/* link to productid */}
                            <a href="" className="vertical">
                                <span className='cardTitle'>{productName}</span>
                                <span>{productClass}</span>
                            </a>
                            <p>{capacity}</p>
                        </div>
                        <div className="horizontally cartLeft">
                            <div className="orderRight">
                                <span>數量</span>
                                <select value={qty} onChange={qtyChange}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                </select>
                            </div>
                            <div className="orderRight">NT$ {productPrice * qty}</div>
                        </div>
                    </div>
                    <div>
                        <div className="horizontally">
                            <div className="productRevise">
                                {/* 出現 popCart/cartUpDate */}
                                <span className='changeLink'>編輯</span>
                            </div>
                            <div className="productRevise" onClick={del}>
                                <span className='changeLink'>移除</span>
                            </div>
                            <div className="productRevise">
                                {/* 收藏/取消收藏 */}
                                <span className='changeLink'>收藏</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartEditCard;