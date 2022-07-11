import React, { useState } from "react";
import ExamEdit from "./ExamEdit";

const ExamCard = ({ queObj, index, deleteExam, updateExamList }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateExamList(obj, index);
  };

  const handleDelete = () => {
    deleteExam(index);
  };

  return (
    <>
      <div className="card-wrapper mr-5">
        <div
          className="card-top"
          style={{ backgroundColor: colors[index % 5].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header text-black"
            style={{
              backgroundColor: colors[index % 5].secondaryColor,
              borderRadius: "10px",
            }}
          >
            {queObj.Question}
          </span>
          <ul className="text-black">
            <li className="text-black">{queObj.OptionOne}</li>
            <li className="text-black">{queObj.OptionTwo}</li>
            <li className="text-black">{queObj.OptionThree}</li>
            <li className="text-black">{queObj.OptionFour}</li>
          </ul>
          <p className=" text-black">Right Answer: {queObj.RightOption}</p>
          <div className="examListIcons">
            <i
              className="far fa-edit"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModal(true)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
        <ExamEdit
          modal={modal}
          toggle={toggle}
          updateTask={updateTask}
          queObj={queObj}
        />
      </div>
    </>
  );
};

export default ExamCard;
