import React from "react";
import Typed from "typed.js";
import '../../Style/QuizBox.css'; // 假設你有一個 CSS 檔案

const QuizTextBox = ({ question }) => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: [question], // 直接傳遞當前字串
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100
        });
    
        // 清理舊的 Typed 實例
        return () => {
          typed.destroy();
        };
    }, [question]); // 添加 question 作為依賴項

    return (
        <div>
            <div className="QuizTextBox">
                <div className="QuizText">
                    <span ref={el} className="QuizBoxWord"></span>
                </div>
            </div>              
        </div>
    );
};

export default QuizTextBox;