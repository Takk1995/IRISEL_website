// import { useState } from 'react';
import React, { useState } from 'react';
import Fqacuf from './fqacuf'; //客製化
import Deliver from './fqadeliver'; //配送
import Member from'./fqamember'; //會員
import Roe from './fqaroe'; //退換貨
import FQAasa from './fqaasa'; //售後
import '../../style/homepage.css';
import HomeFooter from '../../components/footer';
import HomeHeader from '../../components/header';

function FQApage() {
            // 顯示, 隱藏
    const [act, set] = useState('tab1');

    const Content = () => {
        switch (act) {
            case 'tab1':
                return <div><Member /></div>;
            case 'tab2':
                return <div><Fqacuf /></div>;
            case 'tab3':
                return <div><Deliver /></div>;
            case 'tab4':
                return <div><Roe /></div>;
            case 'tab5':
                return <div><FQAasa/></div>;
            default:
                return null;

        }
    }

    return (
        <>
            <HomeHeader/>   
            <div style={{height: '65px'}}></div>
            <main className="vertical fixedspace">
                <div className="PageTitle titlep borbottom">常見問題</div>
                <div className="arrHor">
                    <div className="FAQFormTitle">
                        <ul className='abc'>
                            <li
          className={`FAQFormTitleli font18 texthover ${act === 'tab1' ? 'active' : ''}`}
          onClick={() => set('tab1')}>會員問題</li>
                            <li
          className={`FAQFormTitleli font18 texthover ${act === 'tab2' ? 'active' : ''}`}
          onClick={() => set('tab2')}>客製化服務問題</li>
                            <li
          className={`FAQFormTitleli font18 texthover ${act === 'tab3' ? 'active' : ''}`}
          onClick={() => set('tab3')}>配送問題</li>
                            <li
          className={`FAQFormTitleli font18 texthover ${act === 'tab4' ? 'active' : ''}`}
          onClick={() => set('tab4')}>退換貨問題</li>
                            <li
          className={`FAQFormTitleli font18 texthover ${act === 'tab5' ? 'active' : ''}`}
          onClick={() => set('tab5')}>售後服務問題</li>
                        </ul>

                    </div>
                    <div className="FAQFormDetail">
                    <Content/>
                    </div>
                </div>


            </main>

            <HomeFooter />
        </>
    );

}


export default FQApage;