import React from 'react';
import '../../style/Home.css';


function HomeFooter() {
    return (
        <>
            <footer className="UnderFooter">
                <div className="UnderLink">

                    <ul className="UnderAbout blinehover">
                        <li>品牌故事</li>
                        <li>企業資訊</li>
                        <li>隱私條款</li>
                        <li>服務條款</li>
                        <li>COOKIES政策</li>
                        <li>聯繫客服</li>
                    </ul>
                    <ul className="UnderSocial blinehover">
                        <li>社群媒體</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>LINE</li>
                    </ul>
                    <ul className="UnderSubscribe">
                        <li>訂閱消息</li>
                        <li>Email: </li>
                        <li><input type="email" placeholder="請輸入Email" />
                            <button>送出</button>
                        </li>
                    </ul>
                </div>
                <div className="UnderText">

                    <p>Irisel perfume - Magical Elixirs of Scent and Style</p>
                    <p>2024-Iriselperfume.com.tw.All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default HomeFooter;