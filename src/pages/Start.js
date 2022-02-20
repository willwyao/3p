import React from "react";

const Start = ({ record, setRecord }) => {
  const nextPage = () => {
    const newRecord = { ...record, progress: record.progress + 1 };
    localStorage.setItem("record", JSON.stringify(newRecord));
    setRecord(newRecord);
  };
  return (
    <div className="container">
      <h1>Assessment</h1>
      <p>Click the button to start the assessment.</p>
      <button className="btn btn-primary" onClick={nextPage}>
        Start
      </button>
    </div>
  );
};

export default Start;
