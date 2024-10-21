import React from 'react';
import '../../style/homepage.css';
import HomeFooter from '../../components/footer';
import HomeHeader from '../../components/header';

function ContactUsForm() {
    return (
        <>
            <HomeHeader />
            {/* <!-- top distance --> */}
            <div style={{ height: '65px' }}></div>
            <main className="fixedspace ">
                <div className="ContactUs ">
                    <div className="titleText PageTitle titlep borbottom">聯絡我們</div>
                    <div className='contentText borbottom'>
                        <p>親愛的顧客，</p><br />
                        <p>感謝您對 Irisel 的支持！在聯絡我們之前，我們建議您先查看我們的 常見問題 部分，這裡整理了許多客戶常見的問題與解答，或許可以幫助您快速找到所需資訊。</p><br />
                        <p>或者您可以透過撥 打0800 963 852 或以電子信箱server@Irisel.tw聯繫我們的客戶服務中心。</p><br />
                        <p>服務時間為 星期一至星期五 09:00-1200、13:30-17:30。</p><br />
                        <p>如遇例假日及國定假日則暫停服務。</p><br />
                        <p>如果您在常見問題中沒有找到解答，或者遇到其他問題，請隨時填寫以下表單與我們聯繫。我們的客服團隊將儘速回覆您。</p><br />

                    </div>

                </div>


                <div className="ContactUsForm">

                    <form>
                        <p>請留下您的資料</p><br />
                        <p>您的姓名：<input className="contentboColor InputBox" type="text" /></p><br />
                        <p>聯絡電話：<input className="contentboColor InputBox" type="tel" placeholder="0900-000-000" /></p><br />
                        <p>電子信箱：<input className="contentboColor InputBox" type="email" placeholder="abc123@mail.com" /></p><br />
                        <p>反映主題：<input className="contentboColor InputBox" type="text" size="30px" /></p><br />
                        <p>問題描述：</p><br />
                        <textarea className="contentboColor InputBox" placeholder="請輸入文字" style={{ width: '400px', height: '200px' }} ></textarea><br /><br />
                        {/* <p>請輸入驗證碼：</p><br />
                        <input className="contentboColor InputBox" type="number" />
                        <br /><br /> */}

                        <button className='btnhover subNewsbutton'>確認送出</button>

                    </form>
                </div>


            </main>

            <HomeFooter />
        </>
    );
}

export default ContactUsForm;