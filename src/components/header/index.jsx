import { useState } from 'react';
import '../../style/homepage.css';
import LOGO from '../../img/picLOGO01.png';
import ICONcat from '../../img/piciconCAR.png';
import PopCart from '../popCart'


function HomeHeader() {
    const [popSwitch, setPopSwitch] = useState(false)
    const switchPop = () => setPopSwitch(!popSwitch)

    return (
        <>
    <header>
        <div className="ptabh gennavBar removeborder cenVer">
            {/* <!-- 底線陰影 --> */}
            <div className="fixedspace paLR20 cenVer arrHor horizontallySpaceBetween">
                <img className="h45" src={LOGO} alt="LOGO" />
                <ul className="noBullets arrHor noBreaks titleText">
                    <li className="texthover rightline padLR35">首頁</li>
                    <li className="texthover rightline padLR35">網路商店</li>
                    <li className="texthover rightline padLR35">客製化商品</li>
                    <li className="texthover rightline padLR35">會員中心</li>
                    <li className="texthover padLR35">常見問題</li>
                </ul>
                <img className="h45 leanRight290"
                     src={ICONcat}
                     alt="iconCAR"
                     onClick={switchPop}
                />
                {/* <!-- <div style="background-color: blue;">3</div> --> */}
            </div>
        </div>
    </header>
    {popSwitch && (<PopCart onClose={switchPop} />)}
        </>
    );
}

export default HomeHeader;