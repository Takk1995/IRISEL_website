import React, { useState } from 'react';
import '../../style/homepage.css';
import add from '../../img/home/Homeadd.png';
import close from '../../img/home/Homeclose.png';

// 會員問題
function FQAmember() {
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
            <div className="FAQFormDetail ">
                <div>
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer1')}>
                    <span className="FQAIcon">
                            {actID === 'answer1' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        如何註冊成為 Irisel 的會員？</div>
                    {/* 放置開合答案 */}
                    {actID === 'answer1' && (
                        <div id="answer1" className="FAQA contentText lineHeight30">註冊成為會員非常簡單！只需點擊我們進入會員中心下方的「註冊」按鈕，填寫您的個人資料和聯絡方式，即可成為會員，享受專屬優惠和最新消息。</div>
                    )}
                </div>
                <div>
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer2')}>
                    <span className="FQAIcon">
                            {actID === 'answer2' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        如何查詢我的訂單？</div>
                    {actID === 'answer2' && (
                        <div id="answer2" className="FAQA contentText lineHeight30 ">您可以在會員中心的「我的訂單」頁面查詢過去的訂單紀錄。點選訂單號碼即可查看詳細資訊和訂單進度。</div>
                    )}
                </div>
                <div>
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer3')}>
                    <span className="FQAIcon">
                            {actID === 'answer3' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        忘記密碼怎麼辦？</div>
                    {actID === 'answer3' && (
                        <div id="answer3" className="FAQA contentText lineHeight30 ">請點擊登入頁面的「忘記密碼」選項，輸入您的註冊電子郵件，我們將發送重設密碼的連結至您的信箱。</div>
                    )}

                </div>
                <div>
                    <div className="FAQQ titleText font18" onClick={() => dotans('answer4')}>
                    <span className="FQAIcon">
                            {actID === 'answer4' ? (
                                <img className="FQAIconimg" src={close} alt="X" />
                            ) : (
                                <img className="FQAIconimg" src={add} alt="+" />
                            )}
                        </span>
                        如何更新我的會員資訊？</div>
                    {actID === 'answer4' && (
                        <div id="answer4" className="FAQA contentText lineHeight30 ">您可以登入會員帳戶，進入「個人資料」頁面，更新您的聯絡方式、地址和其他個人資訊。如果需要任何協助，歡迎隨時聯繫我們的客服團隊。</div>
                    )}

                </div>

            </div>
        </>
    );
}


export default FQAmember;