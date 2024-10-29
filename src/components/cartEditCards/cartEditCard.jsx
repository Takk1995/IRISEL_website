import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Takk.css'
import PopUpDate from '../popUpDate';

const CartEditCard =({detail, onDel, onChange, qty}) => {
    const {product_id} = detail
    const [pop, setPop] = useState(false)
    const [currentDetail, setCurrentDetail] = useState(detail)

    // 移除
    const del = () => {
        onDel(product_id);
    }

    // select改變時 設定為新的數量
    const qtyChange = (e) => {
        const newQty = parseInt(e.target.value, 10)
        onChange(product_id, newQty) // 傳回
    }

    // pop 顯示/隱藏
    const switchPop = () => setPop(!pop)

    const handleUpdate = (newProduct) => {
        setCurrentDetail(newProduct)
        onChange(product_id)
        switchPop()
    }

    useEffect(() => {
        onChange(product_id, qty)
    }, [qty, onChange, product_id])

    return (
        <div>
            <div className="horizontally">
                <div>
                    <img src={currentDetail.img_url} alt='' className="cartImg" />
                </div>
                <div style={{ width: '100%' }}>
                    <div className="horizontally">
                        <div>
                            {/* link to productid */}
                            <Link to = {`/product/${currentDetail.product_code}`} className="vertical">
                                <span className='cardTitle'>{currentDetail.product_name}</span>
                                <span>{currentDetail.main_type_Chinese}</span>
                            </Link>
                            <p>{currentDetail.capacity}</p>
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
                            <div className="orderRight">NT$ {currentDetail.price * qty}</div>
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
                        <PopUpDate product={currentDetail} onUpdate={handleUpdate} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartEditCard;