import React, { useState } from 'react';
import '../../style/homepage.css';
import add from '../../img/home/Homeadd.png';
import close from '../../img/home/Homeclose.png';

// 配送問題
function FQAdeliver() {
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
                        Irisel 的產品如何配送？</div>
                    {/* 放置開合答案 */}
                    {actID === 'answer1' && (
                        <div id="answer1" className="FAQA contentText lineHeight30">我們使用可靠的物流合作夥伴進行配送，確保產品快速、安全送達您的手中。所有訂單均提供追蹤號碼，方便您查詢物流狀態。</div>
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
                        配送需要多長時間？</div>
                    {actID === 'answer2' && (
                        <div id="answer2" className="FAQA contentText lineHeight30"> 配送時間取決於您的所在地區。國內配送通常需要3-5個工作日，國際配送則需7-14個工作日。我們會提供詳細的配送預計時間。</div>
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
                        你們提供國際配送嗎？</div>
                    {actID === 'answer3' && (
                        <div id="answer3" className="FAQA contentText lineHeight30">是的，我們提供國際配送服務，讓全球的顧客都能享受 Irisel 的香水。運費與配送時間取決於目的地。</div>
                    )}
                    <div className="FAQItem">
                        <div className="FAQQ titleText font18" onClick={() => dotans('answer4')}>
                            <span className="FQAIcon">
                                {actID === 'answer4' ? (
                                    <img className="FQAIconimg" src={close} alt="X" />
                                ) : (
                                    <img className="FQAIconimg" src={add} alt="+" />
                                )}
                            </span>
                            如果包裹延誤了怎麼辦？</div>
                        {actID === 'answer4' && (
                            <div id="answer4" className="FAQA contentText lineHeight30"> 如果您的包裹配送時間超過了預計到貨時間，請聯繫我們的客服團隊，我們將立即聯絡物流方並為您查詢配送狀況，確保包裹順利送達。如果確認丟失，我們會為您安排重新配送。</div>
                        )}

                    </div>
                </div>

            </div>
        </>
    );
}


export default FQAdeliver;