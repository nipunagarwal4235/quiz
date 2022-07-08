import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  var questionLists = JSON.parse(localStorage.getItem("questionList"));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (option) => {
    console.log(option);
    console.log(questionLists[currentQuestion].RightOption);
    if (option === questionLists[currentQuestion].RightOption) {
      setScore(score + 1);
      console.log(score);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionLists.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questionLists.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {questionLists.length}
              </div>
              <div className="question-text">
                {questionLists[currentQuestion].Question}
              </div>
            </div>
            <div className="answer-section">
              <button
                onClick={() =>
                  handleAnswerOptionClick(
                    questionLists[currentQuestion].OptionOne
                  )
                }
              >
                {questionLists[currentQuestion].OptionOne}
              </button>
              <button
                onClick={() =>
                  handleAnswerOptionClick(
                    questionLists[currentQuestion].OptionTwo
                  )
                }
              >
                {questionLists[currentQuestion].OptionTwo}
              </button>
              <button
                onClick={() =>
                  handleAnswerOptionClick(
                    questionLists[currentQuestion].OptionThree
                  )
                }
              >
                {questionLists[currentQuestion].OptionThree}
              </button>
              <button
                onClick={() =>
                  handleAnswerOptionClick(
                    questionLists[currentQuestion].OptionFour
                  )
                }
              >
                {questionLists[currentQuestion].OptionFour}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
