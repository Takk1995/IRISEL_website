// import React from 'react';
import React, { useState } from 'react';
import '../../style/homepage.css';
import add from '../../img/home/Homeadd.png';
import close from '../../img/home/Homeclose.png';

// 售後服務問題
function FQAasa() {
    // actID顯示, setID隱藏
    const [actID, setID] = useState(null);
    const dotans = (id) => {
        if (actID === id) {
            setID(null);
        } else {
            setID(id);
        }
    }

    return (
        <>
            <div className="FAQFormDetail">
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer1')}>
                        <span className="FQAIcon">
                            {actID === 'answer1' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        如果我對香水的香味不滿意，可以退貨嗎？</div>
                    {/* 放置開合答案 */}
                    {actID === 'answer1' && (
                        <div id="answer1" className="FAQA contentText lineHeight30">如果您對我們的香水不滿意，未開封且保持全新狀態的商品可在14天內申請退貨。客製化香水因為是專屬設計，恕不接受退換，但我們會在製作過程中確保您的滿意。</div>
                    )}
                </div>
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer2')}>
                        <span className="FQAIcon">
                            {actID === 'answer2' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        如果香水瓶破損，我該怎麼處理？</div>
                    {actID === 'answer2' && (
                        <div id="answer2" className="FAQA contentText lineHeight30">如果您收到的香水瓶有破損情況，請在收到包裹後的48小時內聯繫我們的客服團隊，並提供破損的照片。我們將免費為您更換新的商品，並承擔所有相關費用。</div>
                    )}
                </div>
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer3')}>
                        <span className="FQAIcon">
                            {actID === 'answer3' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        Irisel 提供香水的售後保養建議嗎？</div>
                    {actID === 'answer3' && (
                        <div id="answer3" className="FAQA contentText lineHeight30">是的，我們提供香水的保養建議，包括如何保存香水以保持香氣的持久性和瓶身的完好。如果您有任何保養問題，隨時可以聯繫我們的客服團隊，我們將提供專業建議。
                        </div>
                    )}

                </div>

            </div>
        </>
    );
}


export default FQAasa;