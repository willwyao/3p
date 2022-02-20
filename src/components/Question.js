import React from "react";

const Question = ({ question, quizId, setRecord }) => {
  const record = JSON.parse(localStorage.getItem("record"));
  const answers = record.answers;
  const handleChange = (e) => {
    const newAnswers = {
      ...answers,
      [e.target.name]: parseInt(e.target.value),
    };
    const newRecord = { ...record, answers: newAnswers };
    localStorage.setItem("record", JSON.stringify(newRecord));
    setRecord(newRecord);
  };
  return (
    <li>
      <h4>{question.question}</h4>
      {question.answers.map((option, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              id={`${question.id}-${index}`}
              name={`${quizId}-${question.id}`}
              value={index}
              onChange={handleChange}
              checked={
                answers[`${quizId}-${question.id}`] === index ? true : false
              }
            />
            <label htmlFor={`${question.id}-${index}`}>{option}</label>
          </div>
        );
      })}
    </li>
  );
};

export default Question;
