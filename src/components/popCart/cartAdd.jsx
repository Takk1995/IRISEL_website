import '../../style/Takk.css'
import img from '../../img/test.png'

function CartAdd() {
    return (
        <div>
            <div>
                <div>
                    {/* 商品資料 */}
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
                    <hr />
                    {/* 容量選擇 */}
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
                        {/* 購物車加入資料並回到商品頁 */}
                        <button calssName="cartBottom">新增到購物車</button>
                        {/* 直接往商品頁 */}
                        <button calssName="cartBottom">查看更多</button>
                    </div>
                </div>
                <div calssName="horizontallyCenter">
                    <img src={img} alt='' className="cartImg" />
                </div>
            </div>
        </div>
    );
}

export default CartAdd;