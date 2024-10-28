import { useState } from 'react';
import '../../style/homepage.css';
import LOGO from '../../img/home/picLOGO01.png';
import ICONcat from '../../img/home/piciconCAR.png';
import PopCart from '../popCart'


function HomeHeader() {
    const [popSwitch, setPopSwitch] = useState(false)
    const switchPop = () => setPopSwitch(!popSwitch)

    // 開啟actop 關閉actcl
    const [actop, actcl] = useState(false);
    const dotmenu = () => {
        actcl(!actop);
      };

    return (
        <div>
            <div className="ptabh gennavBar cenVer">
                {/* <!-- 底線陰影 --> */}
                <div className="img576 posrela fixedspace paLR20 cenVer arrHor horizontallySpaceBetween">
                    <img className="h45 LOGO" src={LOGO} alt="LOGO" />
                    <button className="texthover hammenu" onClick={dotmenu}>&#9776;</button>
                    <ul className={`barlist noBullets arrHor noBreaks titleText  ${actop ? 'active' : ''}`}>
                        <li className="barlistli texthover rightline padLR35">首頁</li>
                        <li className="barlistli texthover rightline padLR35">網路商店</li>
                        <li className="barlistli texthover rightline padLR35">客製化商品</li>
                        <li className="barlistli texthover rightline padLR35">會員中心</li>
                        <li className="barlistli texthover padLR35">常見問題</li>
                    </ul>
                    <img className="h45 leanRight290"
                        src={ICONcat}
                        alt="iconCAR"
                        onClick={switchPop}
                    />
                </div>
            </div>
            {popSwitch && (<PopCart onClose={switchPop} />)}
        </div>

    );


}

export default HomeHeader;