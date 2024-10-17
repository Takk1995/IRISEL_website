import '../../style/Takk.css'
import img from '../../img/test.png'

const CartEditCard =({detail, onDel}) => {
    const { id, productName, productClass, capacity, productPrice } = detail;

    const del = () => {
        onDel(id);
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
                            {/* form */}
                            <form action="" className="orderRight">
                                <label htmlFor="">數量</label>
                                <select required>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </form>
                            <div className="orderRight">NT$ {productPrice}</div>
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