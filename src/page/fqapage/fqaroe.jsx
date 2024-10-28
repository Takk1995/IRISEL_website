// import React from 'react';
import React, { useState } from 'react';
import '../../style/homepage.css';
import add from '../../img/home/Homeadd.png';
import close from '../../img/home/Homeclose.png';

// 退換貨問題
function FQAroe() {
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
                                <img  className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img  className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        購買的香水可以退換貨嗎？</div>
                    {/* 放置開合答案 */}
                    {actID === 'answer1' && (
                        <div id="answer1" className="FAQA contentText lineHeight30"> 如果您對購買的產品不滿意，未開封且保持全新狀態的商品，可以在購買後14天內申請退換貨。請保持商品及包裝完整，並提供購買憑證。</div>
                    )}
                </div>
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer2')}>
                        <span className="FQAIcon">
                            {actID === 'answer2' ? (
                                <img  className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img  className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        如何申請退換貨？</div>
                    {actID === 'answer2' && (
                        <div id="answer2" className="FAQA contentText lineHeight30">請聯繫我們的客服團隊，並提供訂單號碼與退換貨原因。我們將協助您處理退換貨流程，並提供具體的退換貨地址與說明。</div>
                    )}
                </div>
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer3')}>
                        <span className="FQAIcon">
                            {actID === 'answer3' ? (
                                <img  className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img  className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        退貨後多久可以收到退款？</div>
                    {actID === 'answer3' && (
                        <div id="answer3" className="FAQA contentText lineHeight30">我們在收到退回商品並檢查無誤後，將在5-7個工作日內處理退款。具體退款時間取決於您的支付方式和銀行流程。</div>
                    )}

                </div>
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer4')}>
                        <span className="FQAIcon">
                            {actID === 'answer4' ? (
                                <img  className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img  className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        如果商品有瑕疵，我該怎麼辦？</div>
                    {actID === 'answer4' && (
                        <div id="answer4" className="FAQA contentText lineHeight30">若您收到的商品有任何瑕疵或問題，請立即聯繫我們的客服團隊，並提供相關照片與訂單號碼。我們將全額更換或退回該商品，並為您安排免費退貨和更換服務。</div>
                    )}

                </div>

            </div>
        </>
    );
}


export default FQAroe;