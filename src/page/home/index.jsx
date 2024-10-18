import React from 'react';
import '../../style/Home.css';
import HomeMain01 from '../../img/HomeMain01.png';
import product from '../../img/HomeMain02.png';
import news from '../../img/HomeMain03.png';
import news01 from '../../img/HomeMain04.jpg';
import news02 from '../../img/HomeMain05.jpg';
import news03 from '../../img/HomeMain06.jpg';
import about from '../../img/HomeMain07.jpg';



function HomeMain() {
    return (
        <>
            <main className="HomePage LeaveBlank">
                <div className="TopBanner">
                    <div id="Bannertext" className="InnerSpacing">
                        <p>Magical Elixirs of Scent and Style</p>
                        <button>立即開啟通往香味旅程</button>
                    </div>
                    <img src={HomeMain01} alt="導覽圖" />
                </div>
                <div className="ProductDisplay">
                    <img src={product} alt="展示圖" />

                </div>
                <div id="GradientPC">
                </div>

                <div className="Customized">
                    <div className="Customizedtext subtitle">
                        <p className="">您必須選擇客製化香水的理由</p>
                        <p>
                            選擇客製化香水，就像在彩虹之間拾取您心中的那道光。<br />
                            每一款香水都是為您量身創造的獨家作品，隨著您內心的悸動而綻放。<br />
                            Irisel 讓您不再只是選擇一瓶香水，而是編織屬於您的香氛詩篇。<br />
                            無論是尋找一抹契合內心的悠然，還是為特別的人送上一段屬於他們的氣味記憶，<br />
                            這份專屬的香氣將伴隨著每一個與您息息相關的瞬間，為生活增添一絲魔法與浪漫。<br />
                        </p>
                    </div>
                    <div className="Customizeditem">
                        <div>
                            <div className="CustomizedLabel">
                                <div className="LabelBA">獨特浪漫</div>
                                <div className="LabelBA">專屬香氣</div>
                                <div className="LabelBA">魔法啟程</div>
                                <div className="LabelBA">香氣詩篇</div>
                            </div>

                            <div className="CustomizedStep">

                                <div className="StepTitle">怎麼開始</div>
                                <div className="StepDesc" style={{ background: 'none' }}>簡單五步，輕鬆定制專屬您的獨特香水。</div>

                                <div className="StepTitle StepInner ">1. 參加香氛測驗</div>
                                <div className="StepDesc StepInner">回答幾個簡單問題，找到最適合您的香氣。</div>

                                <div className="StepTitle StepInner">2. 選擇或自由搭配香氛</div>
                                <div className="StepDesc StepInner">根據測驗結果或依照個人喜好，挑選心儀的香氣組合。</div>

                                <div className="StepTitle StepInner">3. 命名專屬香水</div>
                                <div className="StepDesc StepInner">為您的客製化香水命名，讓它更具個人特色。</div>

                                <div className="StepTitle StepInner">4. 確認設計與細節</div>
                                <div className="StepDesc StepInner">檢查香水搭配、包裝選項，並進行最後確認。</div>

                                <div className="StepTitle StepInner">5. 結帳與配送</div>
                                <div className="StepDesc StepInner">完成訂單並選擇配送方式，我們將快速將您的專屬香氛送達。</div>

                            </div>

                        </div>


                    </div>
                </div>

                <div id="GradientCN">
                </div>

                <div className="HomeNews">
                    <div className="HomeNewstitle">
                        <img src={news} alt="最新消息" />
                        <p>最新消息</p>
                    </div>
                    <div className="HomeNewsitem">
                        <div className="HomeNewsHalf">
                            <img src={news01} alt="商品圖" />
                            <div className="HomeNewsDetail">
                                <p>消息01</p>
                                <p>消息說明</p>
                            </div>
                        </div>
                        <div className="HomeNewsHalf">
                            <img src={news02} alt="商品圖" />
                            <div className="HomeNewsDetail">
                                <p>消息01</p>
                                <p>消息說明</p>
                            </div>
                        </div>
                        <div className="HomeNewsHalf">
                            <img src={news03} alt="商品圖" />
                            <div className="HomeNewsDetail">
                                <p>消息01</p>
                                <p>消息說明</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GradientNA">
                </div>

                <div className="HomeAbout">
                    <img src={about} alt="關於品牌" />

                    <div id="HomeAboutpic" className="subtitle">
                        <p>關於Irisel</p>
                        <p>Irisel 是一個充滿夢幻與魔法色彩的香水品牌，靈感來自「魔法彩虹」的多樣性與變幻魅力。</p>
                        <p>我們致力於將自然與幻想融合，為每位使用者打造專屬的香氛體驗。</p>
                        <p>每一款香水都像一道獨特的彩虹，充滿層次與神秘感，展現您的不同面向與內在力量。</p>
                        <p>Irisel 採用天然高品質原料，結合頂尖調香師的藝術創作，</p>
                        <p>讓香氣與情感交織，帶領您進入一個夢幻而奢華的香氛國度。</p>
                        <br />
                    </div>

                </div>

            </main>

        </>
    );
}

export default HomeMain;