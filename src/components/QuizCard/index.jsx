import React, { useState, useEffect } from "react";
import '../../style/QuizCard.css'; // 假設你有一個 CSS 檔案

const  QuizCard = ({ initialContent, flipState, onClick }) => {
    const [content, setContent] = useState(initialContent);
    const [currentFlipState, setCurrentFlipState] = useState(flipState);    

    useEffect(() => {
        setCurrentFlipState(flipState);
    }, [flipState]);

    useEffect(() => {
        if (flipState === 1) {
            setContent(initialContent); // 當狀態為 1 時，更新卡片內容
        }
    }, [flipState, initialContent]);

    return (
        <div className={`QuizCard ${currentFlipState === 1 ? 'default-flipped' : ''} ${currentFlipState === 2 ? 'clicked-flipped' : ''}`} onClick={onClick}>
            <div className="QuizFlipCard">
                <div className="QuizCardFront">
                    <p className="QuizCardAnsWord">{content.front}</p>
                </div>
                <div className="QuizCardBack">
                    <p className="QuizCardAnsWord">{content.back}</p>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;