import React from 'react';
import '../../style/homepage.css';


function HomeFooter() {
    return (
        <>
    <footer>
        <div className="ptabh removeborder cenVer titlebaColor">
            <div className="fixedspace cenVer arrHor horizontallySpaceBetween">
                <ul className="noBullets arrHor noBreaks titleText">
                    <li className="rightline padR35">
                    <a className='cleartext texthover' href='/'>IRISEL品牌</a></li>
                    <li className="rightline texthover padLR35">隱私條款</li>
                    <li className="rightline texthover padLR35">服務條款</li>
                    <li className="rightline texthover padLR35">COOKIES政策</li>
                    <li className="padL35"> <a className='cleartext texthover' href='/contactusform'>聯絡我們</a></li>
                </ul>
                <p className="leanRight135">2024-Iriselperfume.com.tw.All rights reserved.</p>
            </div>
        </div>

    </footer>
        </>
    );
}

export default HomeFooter;