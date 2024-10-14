import '../../style/Takk.css'

function CartAdd() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <a href="" calssName="vertical">
                            <span className="cartTitle">商品名稱</span>
                            <span>商品系列</span>
                        </a>
                    </div>
                    <div>
                        <div>
                            <p>商品編號</p>
                            <p>NT$</p>
                        </div>
                    </div>
                    <hr/>
                        <div>
                            <form action="">
                                <select name="" id="">
                                    <option required>100ml</option>
                                    <option>50ml</option>
                                </select>
                            </form>
                        </div>
                        <div calssName="vertical">
                            <button calssName="btnBottom">新增到購物車</button>
                            <button calssName="btnBottom">查看更多</button>
                        </div>
                </div>
                <div calssName="horizontallyCenter">
                    <img src="../../img/test.png" className="cartImg" />
                </div>
            </div>
        </div>
    );
}

export default CartAdd;