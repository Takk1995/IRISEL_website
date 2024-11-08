import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Takk.css'
import PopUpDate from '../popUpDate';

const CartEditCard =({detail, onDel, onChange, total}) => {
    const {product_id, cart_qty} = detail
    const [pop, setPop] = useState(false)
    const [currentDetail, setCurrentDetail] = useState(detail)
    const [qty, setQty] = useState(cart_qty || 1)    
    // console.log('2',detail);
    
    // 移除
    const del = () => {
        const updatedCart = JSON.parse(localStorage.getItem('guestCart')) || [];
        const newCart = updatedCart.filter(item => item.product_id !== product_id)
        localStorage.setItem('guestCart', JSON.stringify(newCart))
        onDel(product_id)
    }

    // pop 顯示/隱藏
    const switchPop = () => setPop(!pop)

    const handleUpdate = (newProduct) => {        
        const updatedCart = JSON.parse(localStorage.getItem('guestCart')) || []
        const index = updatedCart.findIndex(item => item.product_id === currentDetail.product_id)
        if (index !== -1) {
            updatedCart[index] = newProduct
            // console.log('3',updatedCart)
        } else {
            console.log('err')
        }
        localStorage.setItem('guestCart', JSON.stringify(updatedCart))
        setCurrentDetail(newProduct)
        setQty(newProduct.cart_qty)
        switchPop()
        total(updatedCart)
    }

    useEffect(() => {
        // console.log('2',currentDetail)
    }, [currentDetail])

    // select改變時 設定為新的數量
    const qtyChange = (e) => {
        const newQty = parseInt(e.target.value, 10)        
        setQty(newQty)
        onChange(currentDetail, product_id, newQty)
        const updatedCart = JSON.parse(localStorage.getItem('guestCart')) || [];
        const index = updatedCart.findIndex(item => item.product_id === currentDetail.product_id);
        if (index !== -1) {
            updatedCart[index].cart_qty = newQty
            localStorage.setItem('guestCart', JSON.stringify(updatedCart))
        }
    }
   
    return (
        <div>
            <div className="horizontally">
                <div>
                    <img src={currentDetail.img_url} alt='' className="cartImg" />
                </div>
                <div style={{ width: '100%' }}>
                    <div className="horizontally" style={{paddingLeft:'15px'}}>
                        <div>
                            {/* link to productid */}
                            <Link to = {`/product/${currentDetail.product_code}`} className="vertical" style={{textDecoration:'none'}}>
                                <h4 className='cardTitle cardH4'>{currentDetail.product_name}</h4>
                                <h4 className='popTitle cardH4'>{currentDetail.main_type_Chinese}</h4>
                            </Link>
                            <p>{currentDetail.capacity}ml</p>
                        </div>
                        {/* qty select */}
                        <div className="horizontally cartLeft">
                            <div className="orderRight">
                                <span>數量</span>
                                <select value={qty} onChange={qtyChange}>
                                {[1, 2, 3].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="orderRight">NT$ {currentDetail.price * qty}</div>
                        </div>
                    </div>
                    <div>
                        <div className="horizontally" style={{paddingLeft:'15px'}}>
                            <div className="productRevise" onClick={switchPop}>
                                {/* 出現 popUpDate */}
                                <span className='changeLink'>編輯</span>
                            </div>
                            <div className="productRevise" onClick={del}>
                                <span className='changeLink'>移除</span>
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