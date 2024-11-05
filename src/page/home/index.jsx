import { useNavigate } from 'react-router-dom';
import '../../style/homepage.css';
import Ppic01 from '../../img/home/pic700-3.png';
import Ppic02 from '../../img/home/pic700-1.png';
import Ppic07 from '../../img/home/pic114002.png';
import HomeFooter from '../../components/footer';
import HomeHeader from '../../components/header';
import Carousel from './carousel';
import CarouselPord from './ContactProd';
import images from '../home/carouselProdimg';




function HomeMain() {
    // 取獲路由
    const navigate = useNavigate();
    const BtnClickshop = () => {
        navigate('/catalog'); //到商店路由頁面
      };
    const BtnClickgame = () => {
        navigate('/Quiz'); //到遊戲頁面
      };

    return (
        <>
            <HomeHeader />
            <main className="fixedspace">
                {/* <!-- top distance --> */}
                <div style={{ height: '65px' }}></div>
                {/* <!-- 首圖 --> */}
                {/* <img className="img576" src={Banner} alt="Banner" /> */}
                <Carousel />
                {/* 輪播圖高度 */}
                <div className='imgwh'></div>
                {/* <!-- 商品 --> */}
                <div className="vertical cenVer">
                    <div className="titleset">
                        <p className="titlep">選擇您的香氣旅程</p><br />
                        <p className="contentText">在Irisel，您可以探索我們經典的香氛系列，或開啟DIY客製化之旅，創造專屬於您的獨特香水。<br />無論選擇哪種方式，都將為您帶來夢幻與魔法般的嗅覺體驗。
                        </p>
                    </div>
                    <div className="arrHor Rwdvertical">
                        <div className="imgovers">
                            <img className="imgoverstyle img54 imgset imgw500" src={Ppic01} alt="推薦商品" />
                            <div className="imgoverlay">
                                <button 
                                className="imgoverbtn bttnr btnhover imgstore"
                                onClick={BtnClickshop}
                                >網路商店</button>
                            </div>
                        </div>
                        <div className="imgovers">
                            <img className="imgoverstyle img54 imgset imgw500" src={Ppic02} alt="個性化推薦" />
                            <div className="imgoverlay">
                                <button className="imgoverbtn bttnr btnhover imgstore"
                                onClick={BtnClickgame}
                                >個性化推薦</button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- 推薦 --> */}
                <div className="vertical cenVer">
                    <div className="titleset ">
                        <p className="titlep">挑選您的專屬香氣</p><br />
                        <p className="contentText">在Irisel，我們精心挑選多款風格迥異的香水，無論是經典優雅還是清新活力，<br />總有一款能完美契合您的個性與品味，為每一天增添獨特的韻味。</p>
                    </div>
                    <img className="img576" src={Ppic07} alt="commodity" />
                    {/* <!-- 商品 --> */}
                    <div>
                        <CarouselPord images={images}  />
                    </div>
                </div>
                {/* <!-- 關於 --> */}
                <div className="vertical cenVer">

                    <div className="titleset">
                        <p className="titlep">關於Irisel</p><br />
                        <p className="contentText">Irisel 是一個充滿夢幻與魔法色彩的香水品牌，靈感來自「魔法彩虹」的多樣性與變幻魅力。</p>
                        <p className="contentText">我們致力於將自然與幻想融合，為每位使用者打造專屬的香氛體驗。</p>
                        <p className="contentText">每一款香水都像一道獨特的彩虹，充滿層次與神秘感，展現您的不同面向與內在力量。</p>
                        <p className="contentText">Irisel 採用天然高品質原料，結合頂尖調香師的藝術創作，</p>
                        <p className="contentText">讓香氣與情感交織，帶領您進入一個夢幻而奢華的香氛國度。</p>
                    </div>
                    <div className="absepar abseparbg">

                    </div>
                </div>
            </main>
            <HomeFooter />
        </>
    );
}

export default HomeMain;