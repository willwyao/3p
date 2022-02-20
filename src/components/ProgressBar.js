import React from "react";

const ProgressBar = ({ progress, amount }) => {
  return (
    <div className="progress fixed-bottom">
      <div
        className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow={progress + 1}
        aria-valuemin="0"
        aria-valuemax={amount}
        style={{ width: `${parseInt((progress * 100) / amount)}%` }}
      >
        {parseInt((progress * 100) / amount)}%
      </div>
    </div>
  );
};

export default ProgressBar;
