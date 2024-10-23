import '../../style/Takk.css'
import img from '../../img/test.png'

const PopCard = ({detail}) => {
    const {productName, productClass, productPrice, capacity} = detail;

    return (
            <div className="horizontally">
                <div>
                    <img src={img} alt='' className="cartImg" />
                </div>
                <div className='popCardMain'>
                    <div style={{paddingTop:'15px'}}>
                        <a href="#" className="vertical">
                            <span className='cartTitle'>{productName}</span>
                            <span>{productClass}</span>
                        </a>
                        <div>
                            <p>{capacity}</p>
                        </div>
                    </div>
                    <div className='horizontallySpaceBetween'>
                        <div>
                            <p>數量:1</p>
                        </div>
                        <div>
                            <p>NT$ {productPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PopCard;