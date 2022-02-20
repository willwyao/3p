import React from "react";

const Finish = ({ quizzes, record, reset }) => {
  let fullscore = 0;
  let totalScore = 0;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-6 py-4">
          <h1 className="text-center">
            Well done! You have finished the assessment
          </h1>
          <p>Please find your scores below.</p>
          <ul className="list-unstyled">
            {quizzes.map((quiz) => {
              const score = record.scores[quiz.id];
              const quizScore = quiz.question_ids.length;
              totalScore += score;
              fullscore += quizScore;
              return (
                <li key={quiz.id} className="d-flex justify-content-evenly">
                  <span>{quiz.title} </span>
                  <span>
                    {score} / {quizScore}
                  </span>
                </li>
              );
            })}
          </ul>
          <p>
            Your final score is {totalScore} / {fullscore}
          </p>
          <div className="text-center">
            <button className="btn btn-primary" onClick={reset}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
