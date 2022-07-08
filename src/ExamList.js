import React, { useState, useEffect } from "react";
import ExamCreate from "./ExamCreate";
import ExamCard from "./ExamCard";

export default function ExamList() {

  const [modal, setModal] = useState(false);
  const [questionList, setQuestionList] = useState([]);

  //  fetch all the data from local Storage
  useEffect(() => {
    let questionContainer = localStorage.getItem("questionList");
    // console.log(questionContainer)

    if (questionContainer) {
      let obj = JSON.parse(questionContainer);
      setQuestionList(obj);
      console.log(questionList)
    }

  }, []);

  const deleteExam = (index) => {
    let tempList = questionList;
    tempList.splice(index, 1);
    localStorage.setItem("questionList", JSON.stringify(tempList));
    setQuestionList(tempList);
    window.location.reload();
  };

  const updateExamList = (obj, index) => {
    let tempList = questionList;
    tempList[index] = obj;
    localStorage.setItem("questionList", JSON.stringify(tempList));
    setQuestionList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveExam = (obj) => {
    console.log(obj)
    let tempList = questionList;
    tempList.push(obj);
    console.log(tempList)
    localStorage.setItem("questionList", JSON.stringify(tempList));
    setModal(false);
    setQuestionList(tempList);
  };

  return (
    <>
      <div className="ExamHeader">
        <h3>Question List</h3>
        <button className="Exambtn" onClick={() => setModal(true)}>
          Add a Question
        </button>
      </div>

      <div className="task-container">
      {console.log(questionList)}
        {questionList &&
          questionList.map((obj, index) => (
            <ExamCard
              key={index}
              queObj={obj}
              index={index}
              deleteExam={deleteExam}
              updateExamList={updateExamList}
            />
          ))}
      </div>
      <ExamCreate toggle={toggle} modal={modal} save={saveExam} />
    </>
  );
}
