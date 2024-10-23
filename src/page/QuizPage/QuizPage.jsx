import React, { useEffect, useState } from "react";
import QuizCard from "../../components/QuizCard/index";
import '../../Style/QuizPage.css';
import QuizTextBox from "../../components/QuizTextBox/index";

const QuizPage = () => {
    const questions = [
        { question: "早晨起床後的第一件事是什麼？", answers: ["喝咖啡", "喝茶", "喝水", "運動"] },
        { question: "當你想放鬆時，你最喜歡做什麼？", answers: ["閱讀", "泡澡", "散步", "冥想"] },
        { question: "你最喜歡的季節是什麼?", answers: ["春天", "夏天", "秋天", "冬天"] },
        { question: "在這之中喜歡的飲料?", answers: ["綠茶", "紅茶", "果汁", "咖啡"] },
        { question: "在假日理想的出遊地點?", answers: ["海邊", "山區", "都市", "森林"] },
        { question: "最像你的個性特徵?", answers: ["外向活潑", "安靜內斂", "創意十足", "穩重成熟"] }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [flippedCards, setFlippedCards] = useState(() => {
        const initialFlippedCards = [];
        for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) { // 根據答案數量初始化卡片
            initialFlippedCards.push(0); // 初始狀態為 0
        }
        return initialFlippedCards;
    });
    const [clickedIndex, setClickedIndex] = useState(null);

    useEffect(() => {
        for (let index = 0; index < flippedCards.length; index++) {
            setTimeout(() => {
                setFlippedCards(prev => {
                    const newFlippedCards = [...prev];
                    if (newFlippedCards[index] === 0) {
                        newFlippedCards[index] = 1; // 將狀態改為 1
                    }
                    return newFlippedCards;
                });
            }, index * 500); // 每張卡片延遲 500 毫秒翻轉
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (flippedCards.includes(2)) {
            const timer = setTimeout(() => {
                setFlippedCards(prev => prev.map(() => 0)); // 將所有卡片狀態設為 0

                setTimeout(() => {
                    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length); // 切換到下一組內容
                    setFlippedCards(Array(questions[(currentQuestionIndex + 1) % questions.length].answers.length).fill(1)); // 2 秒後將所有卡片狀態設為 1
                }, 2000);
            }, 800); // 等待動畫完成

            return () => clearTimeout(timer);
        }
    }, [flippedCards, currentQuestionIndex, questions]);

    const handleCardClick = (index) => {
        setClickedIndex(index);
        setFlippedCards(prev => {
            const newFlippedCards = [...prev];
            newFlippedCards[index] = 2; // 將狀態改為 2
            return newFlippedCards;
        });
    };

    return (
        <div className="QuizPageBackground">
            <div className="QuizPageTop">
                <QuizTextBox question={questions[currentQuestionIndex].question} />
            </div>
            <div className="QuizPageBottom"> 
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                    <QuizCard 
                        key={index} 
                        initialContent={{ front: answer, back: "" }} 
                        flipState={flippedCards[index]} 
                        onClick={() => handleCardClick(index)} // 傳遞點擊事件處理函數
                    />
                ))}
            </div>
        </div>
    );
};

export default QuizPage;