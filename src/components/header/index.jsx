import React from 'react';
import '../../style/Home.css';
import LOGO from '../../img/HomeLogo01.png';


function HomeHeader() {
    return (
        <>
            <header className="Header">

                <nav className="TopNav">
                    <div className="TopNavLogo">
                        <img src={LOGO} alt="logo圖示" id="Logo" />
                    </div>
                    <div className="TopNavBar">
                        <ul>
                            <li>最新消息</li>
                            <li>購物商店</li>
                            <li>客製化訂購</li>
                            <li>會員中心</li>
                            <li>常見問題</li>
                        </ul>
                    </div>

                </nav>


            </header>
        </>
    );
}

export default HomeHeader;