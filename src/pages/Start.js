import React from "react";

const Start = ({ record, setRecord }) => {
  const nextPage = () => {
    const newRecord = { ...record, progress: record.progress + 1 };
    localStorage.setItem("record", JSON.stringify(newRecord));
    setRecord(newRecord);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-6 py-4">
          <h1 className="text-center">Assessment</h1>
          <p>Click the button to start the assessment.</p>
          <div className="text-center">
            <button className="btn btn-primary" onClick={nextPage}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
