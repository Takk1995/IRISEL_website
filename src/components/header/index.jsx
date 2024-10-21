import React from 'react';
import '../../style/homepage.css';
import LOGO from '../../img/picLOGO01.png';
import ICONcat from '../../img/piciconCAR.png';


function HomeHeader() {
    return (
        <>
    <header>
        <div class="ptabh gennavBar removeborder cenVer">
            {/* <!-- 底線陰影 --> */}
            <div class="fixedspace paLR20 cenVer arrHor horizontallySpaceBetween">
                <img class="h45" src={LOGO} alt="LOGO" />
                <ul class="noBullets arrHor noBreaks titleText">
                    <li class="texthover rightline padLR35">首頁</li>
                    <li class="texthover rightline padLR35">網路商店</li>
                    <li class="texthover rightline padLR35">客製化商品</li>
                    <li class="texthover rightline padLR35">會員中心</li>
                    <li class="texthover padLR35">常見問題</li>
                </ul>
                <img class="h45 leanRight290" src={ICONcat} alt="iconCAR" />
                {/* <!-- <div style="background-color: blue;">3</div> --> */}
            </div>
        </div>
    </header>
        </>
    );
}

export default HomeHeader;