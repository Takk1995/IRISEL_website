import '../../style/Takk.css'
import img from '../../img/test.png'

function CartUpDate() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <a href="" calssName="vertical">
                            <span calssName="cartTitle">商品名稱</span>
                            <span>商品系列</span>
                        </a>
                    </div>
                    <div>
                        <div>
                            <p>商品編號</p>
                            <p>NT$</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        {/* form */}
                        <form action="">
                            <select name="" id="">
                                <option required>100ml</option>
                                <option>50ml</option>
                            </select>
                        </form>
                    </div>
                    <div calssName="vertical">
                        {/* 往cartOrder */}
                        <button className='cartBottom'>更新購物車</button>
                    </div>
                </div>
                <div calssName="horizontallyCenter">
                    <img src={img} alt='' className="cartImg" />
                </div>
            </div>
        </div>
    );
}

export default CartUpDate;