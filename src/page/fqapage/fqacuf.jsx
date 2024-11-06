// import React from 'react';
import React, { useState } from 'react';
import '../../style/homepage.css';
import add from '../../img/home/Homeadd.png';
import close from '../../img/home/Homeclose.png';

// 客製化問題
function FQAcuf() {
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
                        Irisel個人化推薦系統如何運作？</div>
                    {/* 放置開合答案 */}
                    {actID === 'answer1' && (
                        <div id="answer1" className="FAQA contentText lineHeight30">我們的個人化推薦是根據您在頁面上的卡牌選擇進行分析。您將回答5個與氣味偏好、情境及個人風格相關的問題，我們會根據您的回答推薦最適合您的香水。</div>
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
                        我可以在選擇後查看其他香水選項嗎？</div>
                    {actID === 'answer2' && (
                        <div id="answer2" className="FAQA contentText lineHeight30">當然可以！在個人化推薦之後，您可以繼續瀏覽我們的商品頁面，查看更多香水選項，或是直接購買推薦的香水。</div>
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
                        為什麼要回答這些問題？</div>
                    {actID === 'answer3' && (
                        <div id="answer3" className="FAQA contentText lineHeight30">這些問題設計用來了解您的偏好，藉此從多種香水中篩選出與您氣質、個性最契合的選擇，帶給您更具個人風格的香水體驗。</div>
                    )}

                </div>
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer4')}>
                        <span className="FQAIcon">
                            {actID === 'answer4' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        我可以重新測試嗎？</div>
                    {actID === 'answer4' && (
                        <div id="answer4" className="FAQA contentText lineHeight30">當然可以！如果您的喜好有所變化，或只是想再次體驗，可以隨時返回個人化推薦頁面重新測試。</div>
                    )}

                </div>
                <div className="FAQItem">
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer5')}>
                        <span className="FQAIcon">
                            {actID === 'answer5' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        這些推薦結果準確嗎？</div>
                    {actID === 'answer5' && (
                        <div id="answer5" className="FAQA contentText lineHeight30">我們的推薦基於深入的氣味分析和風格設計，旨在提供最貼近您個人風格的選擇。雖然偏好因人而異，我們相信此推薦能為您提供貼心的香水靈感。</div>
                    )}

                </div>

            </div>
        </>
    );
}


export default FQAcuf;