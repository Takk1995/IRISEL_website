import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../style/Takk.css'

const PopUpDate = ({product, onUpdate}) => {
    const [newProduct, setNewProduct] = useState(product)
    const [select, setSelect] = useState(String(product.capacity))
    const [current, setCurrent] = useState(String(product.product_code))

    const capacityChange = (e) => {
        const newCapacity = e.target.value
        setSelect(newCapacity)

        const baseCode = current.slice(0,3)
        const newY = String(newCapacity)
        const newSort = String(product.sort_in_type).padStart(2,'0')
        const newProductCode = `${baseCode}${newY}0${newSort}`
        setCurrent(newProductCode)
    }

    const handleUpdate = () => {
        onUpdate(newProduct)
    }

    useEffect(() => {
        const fetchProductData = async() => {
            try {
                const response = await axios.get('http://localhost:8000/api/updateCapacity', {
                    params: {product_code: current}
                })                
                setNewProduct(response.data)                
            } catch (error) {
                console.error(error)
            }
        }
        if (current) {
            fetchProductData()
        }
    }, [current])

    return (
        <div>
            <div className='cartTop'>
                {/* 商品資料 */}
                <div>
                    <Link to = {`/product${newProduct.product_code}`} className="vertical">
                        <span className="cartTitle">{newProduct.product_name}</span>
                        <span>{newProduct.main_typr_Chinese}</span>
                    </Link>
                </div>
                <div>
                    <div>
                        <p>商品編號: {newProduct.product_code}</p>
                        <p>NT$ {newProduct.price}</p>
                    </div>
                </div>
                <hr />
                {/* 容量選擇 */}
                <div>
                    <select value={select} onChange={capacityChange}>
                        <option value='1'>30ml</option>
                        <option value='2'>50ml</option>
                        <option value='3'>100ml</option>
                    </select>
                </div>
                {/* 往cartOrder */}
                <div className="vertical cartTop">
                    <button className='cartBottom' onClick={handleUpdate}>更新購物車</button>
                </div>
            </div>
            <div className="horizontallyCenter">
                <img src={newProduct.img_url} alt='' className="cartImg" />
            </div>
        </div>
    );
}

export default PopUpDate;