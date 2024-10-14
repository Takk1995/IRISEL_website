import '../../style/Takk.css'

function CartOrder() {
    return (
        <div className='cartMargin'>
            <h2>訂單摘要</h2>
            <ul className="noBullets">
                <li className="orderLine"></li>
            </ul>
            <div>
                <div className="horizontally">
                    <div>
                        <img src="../../img/test.png" className="cartImg" />
                    </div>
                    <div style={{ width: '100%'}}>
                        <div className="horizontally">
                            <div>
                                <a href="" className="vertical">
                                    <span className='cardTitle'>商品名稱</span>
                                    <span>商品系列</span>
                                </a>
                                <p>100ml</p>
                            </div>
                            <div className="horizontally cartLeft">
                                <Form action="" className="orderRight">
                                    <label htmlFor="">數量</label>
                                    <select required>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </Form>
                                <div className="orderRight">NT$</div>
                            </div>
                        </div>
                        <div>
                            <div className="horizontally">
                                <a href="" className="productRevise">
                                    <span>編輯</span>
                                </a>
                                <a href="" className="productRevise">
                                    <span>移除</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="noBullets">
                <li className="orderLine"></li>
            </ul>
            <div className="horizontally">
                <div>
                    <span>小計</span>
                </div>
                <span className="cartLeft">NT$</span>
            </div>
            <h2>包裝</h2>
            <ul className="noBullets">
                <li className="orderLine"></li>
            </ul>
            <div className="packageBar">
                <ul className="noBullets">
                    <li className="packageBorder">
                        <input type="radio" name="package" id="simple" />
                        <img src="../../img/test.png" className="cartImg" />
                        <label htmlFor="simple" className="packageLable">簡約包裝</label>
                    </li>
                    <li className="packageBorder">
                        <input type="radio" name="package" id="classic" />
                        <img src="../../img/test.png" className="cartImg" />
                        <label htmlFor="classic" className="packageLable">經典包裝</label>
                    </li>
                </ul>
            </div>
            <div>
            <div className="horizontallyCenter">
                <button className="btnBottom">前往結帳</button>
            </div>
            <div className="horizontallyCenter">
                <a href="">
                    <span>繼續購物</span>
                </a>
            </div>
         </div>
        </div>
    );
}

export default CartOrder;