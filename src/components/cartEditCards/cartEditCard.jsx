import { useState } from 'react';
import '../../style/Takk.css'
import img from '../../img/test.png'
import PopUpDate from '../popUpDate';

const CartEditCard =({detail, onDel, onChange}) => {
    const { id, productName, productClass, capacity, productPrice } = detail;
    const [qty, setQty] = useState(1)
    const [pop, setPop] = useState(false)

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

    // pop 顯示/隱藏
    const switchPop = () => setPop(!pop)

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
                            <a href="#" className="vertical">
                                <span className='cardTitle'>{productName}</span>
                                <span>{productClass}</span>
                            </a>
                            <p>{capacity}</p>
                        </div>
                        {/* qty select */}
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
                            <div className="productRevise" onClick={switchPop}>
                                {/* 出現 popUpDate */}
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
            {/* PopUpDate */}
            {pop && (
                <div className='popMask' onClick={switchPop}>
                    <div className={`pop ${pop ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <div>
                            <div className='popClose' onClick={switchPop}>X</div>
                        </div>
                        <PopUpDate/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartEditCard;