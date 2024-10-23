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
                    <div className='contentText borbottom rwdcontext'>
                        <p className='rwdcontext'>親愛的顧客，</p><br />
                        <p  className='rwdcontext'>感謝您對 Irisel 的支持！在聯絡我們之前，我們建議您先查看我們的  <a className='removeset texthover fontblock' href="/FQA">常見問題</a>  部分，這裡整理了許多客戶常見的問題與解答，或許可以幫助您快速找到所需資訊。</p><br />
                        <p  className='rwdcontext'>或者您可以透過撥 打0800 963 852 或以電子信箱server@Irisel.tw聯繫我們的客戶服務中心。</p><br />
                        <p  className='rwdcontext'>服務時間為 星期一至星期五 09:00-1200、13:30-17:30。</p><br />
                        <p  className='rwdcontext'>如遇例假日及國定假日則暫停服務。</p><br />
                        <p  className='rwdcontext'>如果您在常見問題中沒有找到解答，或者遇到其他問題，請隨時填寫以下表單與我們聯繫。我們的客服團隊將儘速回覆您。</p><br />

                    </div>

                </div>


                <div className="ContactUsForm">

                    <form>
                        <p  className='rwdcontext'>請留下您的資料</p><br />
                        <p  className='rwdcontext'>您的姓名：
                          <input className="contentboColor InputBox" type="text" /></p><br />
                        <p  className='rwdcontext'>聯絡電話：
                          <input className="contentboColor InputBox" type="tel" placeholder="0900-000-000" /></p><br />
                        <p  className='rwdcontext'>電子信箱：
                          <input className="contentboColor InputBox" type="email" placeholder="abc123@mail.com" /></p><br />
                        <p  className='rwdcontext'>反映主題：
                          <input className="contentboColor InputBox" type="text" size="30px" /></p><br />
                        <p  className='rwdcontext'>問題描述：</p><br />
                        <textarea className="textareaBox contentboColor InputBox" placeholder="請輸入文字"></textarea><br /><br />
                        {/* <p>請輸入驗證碼：</p><br />
                        <input className="contentboColor InputBox" type="number" />
                        <br /><br /> */}

                        <button className='removeset btnhover bttnr formbttnr'>確認送出</button>

                    </form>
                    
                </div>


            </main>

            <HomeFooter />
        </>
    );
}

export default ContactUsForm;