import '../../style/Takk.css'

const PopCard = ({detail}) => {
    const {product_name, main_type_Chinese, img_url, price, capacity} = detail;

    return (
            <div className="horizontally">
                <div>
                    <img src={img_url} alt='' className="cartImg" />
                </div>
                <div className='popCardMain'>
                    <div style={{paddingTop:'15px'}}>
                        <a href="#" className="vertical">
                            <span className='cartTitle'>{product_name}</span>
                            <span>{main_type_Chinese}</span>
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
                            <p>NT$ {price}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PopCard;