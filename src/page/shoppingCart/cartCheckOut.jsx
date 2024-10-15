import '../../style/Takk.css'
import img from '../../img/test.png'

function CartDelivery() {
    // 0:會員登入 1:訪客登入

    // 0:登入 1:配送

    return (
        <div className="horizontally cartMargin">
            <div className="cartRight deliveryWidth">
                {/* 登入 */}
                <div>
                    {/* 會員/訪客 */}
                    <div>
                        <ul className="noBullets horizontallyCenter">
                            <li className="cartLoginLi">
                                <h2 className="cartLoginHeader">會員登入</h2>
                            </li>
                            <li className="cartLoginLi">
                                <h2 className="cartLoginHeader">訪客</h2>
                            </li>
                        </ul>
                    </div>
                    {/* HoverLine */}
                    <div>
                        <ul className="noBullets horizontally">
                            <li className="cartLine"></li>
                            <li className="cartLine"></li>
                        </ul>
                    </div>
                    {/* 會員輸入/訪客輸入 */}
                    <div>
                        {/* 會員 */}
                        <div>
                            <div className="horizontallyCenter cartLoginMargin">
                                <p>歡迎回來。登入並繼續完成至商品配送。</p>
                            </div>
                            {/* form */}
                            <form action="">
                                <div className="horizontallyCenter cartLoginMargin">
                                    <input type="email" placeholder="電子郵件或手機號碼" />
                                </div>
                                <div className="horizontallyCenter cartLoginMargin">
                                    <input type="password" placeholder="密碼" />
                                </div>
                                <div className="horizontallyCenter cartLoginMargin">
                                    <a href="">
                                        <span>忘記密碼?</span>
                                    </a>
                                </div>
                                <div className="horizontallyCenter cartLoginMargin">
                                    <input type="checkbox" id="loginRember" />
                                    <label htmlFor="loginRember">記住我(選填)</label>
                                </div>
                                <div className="horizontallyCenter">
                                    <button>登入</button>
                                </div>
                            </form>
                        </div>
                        {/* 訪客 */}
                        <div style={{ display: 'none' }}>
                            <div className="cartLoginMargin">
                                <p className="horizontallyCenter">
                                    輸入您的電子郵件並以訪客身分繼續，
                                </p>
                                <p className="horizontallyCenter">
                                    您可在訂購完成後建立帳戶。
                                </p>
                            </div>
                            {/* form */}
                            <form action="">
                                <div className="horizontallyCenter cartLoginMargin">
                                    <input type="email" placeholder="電子郵件" />
                                </div>
                                <div className="horizontallyCenter cartLoginMargin">
                                    <button>繼續前往付款</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* 配送 */}
                <div style={{ display: 'none' }}>
                    {/* 返回登入 */}
                    <div>
                        <div className="horizontally">
                            <h2 style={{ marginBottom: '10px' }}>登入</h2>
                            <a href="" className="verticalEnd cartLeft">
                                {/* 返回登入 */}
                                <span>編輯</span>
                            </a>
                        </div>
                        <ul className="noBullets">
                            <li className="orderLine"></li>
                        </ul>
                    </div>
                    {/* 配送輸入 */}
                    <div>
                        <div>
                            <div className="horizontally">
                                <h2 style={{ marginBottom: '10px' }}>配送</h2>
                            </div>
                            <ul className="noBullets">
                                <li className="orderLine"></li>
                            </ul>
                        </div>
                        {/* 配送資料 */}
                        <div className='vertical cartMargin deliveryBottom'>
                            <div className='horizontallySpaceBetween'>
                                <div className='verticalEnd deliveryWidth'>
                                    <p>姓氏</p>
                                    <input type="text" />
                                </div>
                                <div className='verticalEnd deliveryWidth'>
                                    <p>名字</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='verticalEnd deliveryWidth cartRight'>
                                <p>電話號碼</p>
                                <input type="tel" />
                            </div>
                            <div className='horizontallySpaceBetween'>
                                <div className='verticalEnd deliveryWidth'>
                                    <p>縣市</p>
                                    <select name="" id="">

                                    </select>
                                </div>
                                <div className='verticalEnd deliveryWidth'>
                                    <p>鄉鎮市區</p>
                                    <select name="" id="">

                                    </select>
                                </div>
                            </div>
                            <div className='verticalEnd deliveryWidth cartRight'>
                                <p>郵遞區號</p>
                                <input type="text"
                                    readOnly
                                />
                            </div>
                            <div className='verticalEnd deliveryWidth cartRight'>
                                <p>地址</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='horizontallyCenter cartBottom'>
                            <button>前往付款</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cartLeft deliveryWidth">
                <div>
                    <div className="horizontally">
                        <h2 className='cardTitle'>訂單摘要</h2>
                        <a href="" className="verticalEnd cartLeft">
                            {/* 回到 Order */}
                            <span>編輯</span>
                        </a>
                    </div>
                    <ul className="noBullets">
                        <li className="orderLine"></li>
                    </ul>
                </div>
                {/* each所選商品資料 */}
                <div>
                    <div className="horizontally">
                        <div>
                            <img src={img} alt='' className="cartImg" />
                        </div>
                        <div style={{ width: '100%' }}>
                            <div className="vertical">
                                <div>
                                    <a href="" className="vertical">
                                        <span className='cardTitle'>商品名稱</span>
                                        <span>商品系列</span>
                                    </a>
                                    <p>100ml</p>
                                </div>
                                <div className="horizontally">
                                    <div className="cartRight">
                                        <span>數量</span>
                                    </div>
                                    <div className="cartLeft">NT$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="noBullets">
                    <li className="orderLine"></li>
                </ul>
                {/* 總金額 */}
                <div className="horizontally cartBottom">
                    <div>
                        <span>小計</span>
                    </div>
                    <span className="cartLeft">NT$</span>
                </div>
                <div>
                    <div className="horizontally">
                        <h2 className='cardTitle'>包裝</h2>
                    </div>
                    <ul className="noBullets">
                        <li className="orderLine"></li>
                    </ul>
                </div>
                {/* 顯示選擇的包裝 */}
                <div>
                    <div className="packageBar">
                        <ul className="noBullets">
                            <li className="packageBorder">
                                <img src={img} alt='' className="cartImg" />
                                <div className="horizontallyCenter packageLable">
                                    <p>簡約包裝</p>
                                    <p>使用可回收材質，並內含有機棉收納袋。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartDelivery;