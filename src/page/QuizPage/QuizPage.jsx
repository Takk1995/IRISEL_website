import React, { useEffect, useState } from "react";
import QuizCard from "../../components/QuizCard";
import '../../style/QuizPage.css';
import QuizTextBox from "../../components/QuizTextBox/index";
import axios from 'axios';
import Modal from "../../components/QuizModal/index";
import { createPortal } from "react-dom";

const QuizPage = () => {
    const questions = [
        { question: "早晨起床後的第一件事是什麼？", answers: [{ text: "喝咖啡", weight: 1 }, { text: "喝茶", weight: 3 }, { text: "喝水", weight: 2 }, { text: "運動", weight: 4 }] },
        { question: "當你想放鬆時，你最喜歡做什麼？", answers: [{ text: "閱讀", weight: 1 }, { text: "泡澡", weight: 2 }, { text: "散步", weight: 3 }, { text: "冥想", weight: 4 }] },

    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [flippedCards, setFlippedCards] = useState(Array(questions[0].answers.length).fill(0));
    const [clickedIndex, setClickedIndex] = useState(null);
    const [selectedWeights, setSelectedWeights] = useState([]); // 用於存儲所選答案的權重
    const [productData, setProductData] = useState([]);
    const [handleButtonClick, setHandleButtonClick] = useState("");

    let code = 1021001;

    useEffect(() => {
        // 每次切換問題時，讓卡片依序翻轉
        setFlippedCards(Array(questions[currentQuestionIndex].answers.length).fill(0));
        for (let index = 0; index < questions[currentQuestionIndex].answers.length; index++) {
            setTimeout(() => {
                setFlippedCards(prev => {
                    const newFlippedCards = [...prev];
                    newFlippedCards[index] = 1;
                    return newFlippedCards;
                });
            }, index * 400);
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (flippedCards.includes(2)) {
            const timer = setTimeout(() => {
                setFlippedCards(prev => prev.map(() => 0));
                setTimeout(() => {
                    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
                    setFlippedCards(Array(questions[(currentQuestionIndex + 1) % questions.length].answers.length).fill(1));
                }, 2000);
            }, 800);

            return () => clearTimeout(timer);
        }
    }, [flippedCards, currentQuestionIndex, questions]);

    const Test = () => {
        axios.get(`http://localhost:8000/api/product/${code}`).then(response => {
            setProductData(response.data[0]); // 更新 productData state
            setHandleButtonClick(`http://localhost:3000/product/${code}`);
            console.log(handleButtonClick);

        });
    };
    const handleCardClick = (index) => {
        const selectedAnswer = questions[currentQuestionIndex].answers[index];
        setClickedIndex(index);
        setFlippedCards(prev => {
            const newFlippedCards = [...prev];
            newFlippedCards[index] = 2;
            return newFlippedCards;
        });

        setSelectedWeights(prev => [...prev, selectedAnswer.weight]);

        if (selectedWeights.length + 1 === questions.length) {
            setTimeout(() => calculateResult());
            Test();
            setFlippedCards(Array(questions[currentQuestionIndex].answers.length).fill(0));
            setTimeout(() => {
                setModalOpen(true);
            }, 1000);
        }
    };

    const calculateResult = () => {
        const weightCount = selectedWeights.reduce((acc, weight) => {
            acc[weight] = (acc[weight] || 0) + 1;
            return acc;
        }, {});

        const mostFrequentWeight = Object.keys(weightCount).reduce((a, b) => weightCount[a] > weightCount[b] ? a : b);
        // alert(`你選擇的最多權重為：${mostFrequentWeight}`);
        if (mostFrequentWeight === "1") {
            code = 1011001;
        } else if (mostFrequentWeight === "2") {
            code = 1021001;
        }
        else if (mostFrequentWeight === "3") {
            code = 1031001;
        }
        else if (mostFrequentWeight === "4") {
            code = 1041001;
        }
    };
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <div className="QuizPageBackground">
            <div className="QuizPageTop">
                <QuizTextBox question={questions[currentQuestionIndex].question} />
                {/* <button className="btn btn-open" onClick={() => setModalOpen(true)}>
                    Open
                </button>
                <button onClick={()=>Test()}>Test</button> */}
                {modalOpen &&
                    createPortal(
                        <Modal
                            onSubmit={handleButtonClick ? handleButtonClick : null}
                            modalTitle={productData ? productData.product_name : ""}
                            modalText={productData ? productData.product_intro : ""}
                            backgroundImage={productData ? productData.img_url : ""} // 傳遞背景圖片
                        >
                        </Modal>,
                        document.body
                    )}
            </div>
            <div className="QuizPageBottom">
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                    <QuizCard
                        key={index}
                        initialContent={{ front: answer.text, back: "" }}
                        flipState={flippedCards[index]}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
export default QuizPage;