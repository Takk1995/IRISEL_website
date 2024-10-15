import '../../style/Takk.css'

function CartConfirmation() {
    return (
        <div>
            <div>
                <div className="horizontallyCenter">
                    <p>Checked</p>
                </div>
                <div className="horizontallyCenter">
                    <p>已經收到您的訂單</p>
                </div>
            </div>
            <div>
                <ul className="noBullets horizontallyCenter">
                    <li>
                        <span style={{marginRight: '40px'}}>訂單編號:</span>
                    </li>
                    <li>
                        {/* 往訂單查詢 */}
                        <a href="">
                            <span>訂單編號</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='cartBottom'>
                <ul className="noBullets">
                    <li className="horizontallyCenter">
                        <p>已完成付款</p>
                    </li>
                    <li className="horizontallyCenter">
                        <span>付款時間:</span>
                    </li>
                    <li className="horizontallyCenter">
                        <span>2024/09/25</span>
                    </li>
                </ul>
            </div>
            <div className="horizontallyCenter">
                {/* 往 Home */}
                <button className='cartBottom'>返回首頁</button>
            </div>
        </div>
    );
}

export default CartConfirmation;