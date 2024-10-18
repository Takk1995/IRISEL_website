import '../../style/Takk.css'
import img from '../../img/test.png'

const CartCheckCard = ({detail}) => {
    const {productName, productClass, productPrice, capacity, cartProductQty, productPackage} = detail;
    
    return (
        <div className="horizontally">
            <div>
                <img src={img} alt='' className="cartImg" />
            </div>
            <div style={{ width: '100%' }}>
                <div className="vertical">
                    <div>
                        <a href="" className="vertical">
                            <span className='cardTitle'>{productName}</span>
                            <span>{productClass}</span>
                        </a>
                        <p>{capacity}</p>
                    </div>
                    <div className="horizontally">
                        <div className="cartRight">
                            <span>數量 {cartProductQty}</span>
                        </div>
                        <div className="cartLeft">NT$ {cartProductQty * productPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCheckCard;