import { Link } from 'react-router-dom';
import '../../style/Takk.css'

const CartCheckCard = ({detail, qty}) => {
    const {product_name, main_type_Chinese, img_url ,price, capacity, product_code, cart_qty} = detail;
    
    return (
        <div className="horizontally">
            <div>
                <img src={img_url} alt='' className="cartImg" />
            </div>
            <div style={{ width: '100%' }}>
                <div className="vertical">
                    <div>
                        <Link to = {`/product/${product_code}`} className="vertical">
                            <span className='cardTitle'>{product_name}</span>
                            <span>{main_type_Chinese}</span>
                        </Link>
                        <p>{capacity}ml</p>
                    </div>
                    <div className="horizontally">
                        <div className="cartRight">
                            <span>數量 {cart_qty}</span>
                        </div>
                        <div className="cartLeft">NT$ {cart_qty * price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCheckCard;