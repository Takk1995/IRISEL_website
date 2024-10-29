import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../style/Takk.css'

const PopUpDate = ({product, onUpdate}) => {
    const [newProduct, setNewProduct] = useState(product)
    const [select, setSelect] = useState(product.capacity || '100ml')
    const [current, setCurrent] = useState(product.product_code)

    const capacityToY = {
        '100': '1',
        '50': '2',
        '30': '3'
    }

    const fetchOtherCapacity = async(productCode) => {
        try {
            const response = await axios.get('/api/updateCapacity', {
                params: {
                    product_code: productCode
                }
            })
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const getNewProduct = async() => {
            const newProductInfo = await fetchOtherCapacity(current)
            if (newProductInfo) {
                setNewProduct(newProductInfo)
            }
        }
        getNewProduct()
    }, [current])

    const capacityChange = (e) => {
        const newCapacity = e.target.value
        setSelect(newCapacity)

        const baseCode = current.slice(0,3)
        const newY = capacityToY[newCapacity]
        const newProductCode = `${baseCode}${newY}0${product.sort_in_type}`
        setCurrent(newProductCode)
    }

    const handleUpdate = () => {
        onUpdate(newProduct)
    }

    return (
        <div>
            <div className='cartTop'>
                {/* 商品資料 */}
                <div>
                    <Link to = {`/product${newProduct.product_code}`} className="vertical">
                        <span className="cartTitle">{newProduct.produc_name}</span>
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
                        <option value='100'>100ml</option>
                        <option value='50'>50ml</option>
                        <option value='30'>30ml</option>
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