import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ExamEdit = ({ modal, toggle, updateTask, queObj }) => {

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [rightOption, setRightOption] = useState("");
  const [question, setQuestion] = useState("");


  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;
    switch (name) {
      case "question":
        setQuestion(value);
        break;
      case "optionone":
        setOptionOne(value);
        break;
      case "optiontwo":
        setOptionTwo(value);
        break;
      case "optionthree":
        setOptionThree(value);
        break;
      case "optionfour":
        setOptionFour(value);
        break;
      case "rightoption":
        setRightOption(value);
        break;
      default:
        console.log("error");
        break;
    }
  };

  useEffect(() => {
    // setExamName(queObj.Question);
    // setDescription(queObj.Description);
    setQuestion(queObj.Question)
    setOptionOne(queObj.OptionOne)
    setOptionTwo(queObj.OptionTwo)
    setOptionThree(queObj.OptionThree)
    setOptionFour(queObj.OptionFour)
    setRightOption(queObj.RightOption)
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Question"] = question;
    tempObj["OptionOne"] = optionOne;
    tempObj["OptionTwo"] = optionTwo;
    tempObj["OptionThree"] = optionThree;
    tempObj["OptionFour"] = optionFour;
    tempObj["RightOption"] = rightOption;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Exam</ModalHeader>
      <ModalBody>
        <form action="">
          <div className="form-group">
            <label>Question</label>
            <textarea
              rows="2"
              className="form-control"
              value={question}
              onChange={handleChange}
              name="question"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Option 1</label>
            <input
              type="text"
              className="form-control"
              value={optionOne}
              onChange={handleChange}
              name="optionone"
            />
          </div>
          <div className="form-group">
            <label>Option 2</label>
            <input
              type="text"
              className="form-control"
              value={optionTwo}
              onChange={handleChange}
              name="optiontwo"
            />
          </div>
          <div className="form-group">
            <label>Option 3</label>
            <input
              type="text"
              className="form-control"
              value={optionThree}
              onChange={handleChange}
              name="optionthree"
            />
          </div>
          <div className="form-group">
            <label>Option 4</label>
            <input
              type="text"
              className="form-control"
              value={optionFour}
              onChange={handleChange}
              name="optionfour"
            />
          </div>
          <div className="form-group">
            <label>Right Option</label>
            <input
              type="text"
              className="form-control"
              value={rightOption}
              onChange={handleChange}
              name="rightoption"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ExamEdit;
