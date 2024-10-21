// import React from 'react';
import React, { useState } from 'react';
import '../../style/homepage.css';
import add from '../../img/Homeadd.png';
import close from '../../img/Homeclose.png';

// 客製化問題
function FQAcuf() {
    // actID顯示, setID隱藏
    const [actID, setID] = useState(null);
    const dotans = (id) => {
        if (actID == id) {
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
                        Irisel 提供香水的客製化服務嗎？</div>
                    {/* 放置開合答案 */}
                    {actID === 'answer1' && (
                        <div id="answer1" className="FAQA contentText lineHeight30">是的，我們提供客製化香水服務，您可以選擇特定的香氛元素，打造專屬於您的個人化香水。我們的專業調香師將根據您的偏好，創造獨一無二的香氛體驗。</div>
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
                        如何申請客製化香水？</div>
                    {actID === 'answer2' && (
                        <div id="answer2" className="FAQA contentText lineHeight30">您可以通過我們的官網或親臨指定門市，與我們的調香師進行諮詢，告知您的香氣偏好。我們會根據您的需求設計獨特的配方，並為您提供樣品進行確認。</div>
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
                        客製化香水需要多久才能完成？</div>
                    {actID === 'answer3' && (
                        <div id="answer3" className="FAQA contentText lineHeight30">客製化香水的製作通常需要7-14個工作日，具體時間取決於配方的複雜度和設計過程。我們會在每個階段與您保持聯繫，確保產品符合您的期望。</div>
                    )}

                </div>

            </div>
        </>
    );
}


export default FQAcuf;