import { Link } from 'react-router-dom';
import '../../style/Takk.css'

const PopCard = ({detail}) => {
    const {product_name, main_type_Chinese, img_url, price, capacity, product_code} = detail
    
    return (
            <div className="horizontally">
                <div>
                    <img src={img_url} alt='' className="cartImg" />
                </div>
                <div className='popCardMain'>
                    <div style={{paddingTop:'15px', paddingLeft:'15px'}}>
                        <Link to = {`/product/${product_code}`} className="vertical" style={{textDecoration:'none'}}>
                            <h4 className='popTitle cardH4'>{product_name}</h4>
                            <h4 className='popTitle cardH4'>{main_type_Chinese}</h4>
                        </Link>
                        <div>
                            <p>{capacity}ml</p>
                        </div>
                    </div>
                    <div className='horizontallySpaceBetween' style={{paddingLeft:'15px'}}>
                        <div>
                            <p>數量:1</p>
                        </div>
                        <div>
                            <p>NT$ {price}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PopCard;