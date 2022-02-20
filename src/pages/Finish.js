import React from "react";

const Finish = ({ quizzes, record, reset }) => {
  let fullscore = 0;
  let totalScore = 0;

  return (
    <div className="container">
      <h1>Well done! You have finished the assessment</h1>
      <p>Please find your scores below.</p>
      <ul>
        {quizzes.map((quiz) => {
          const score = record.scores[quiz.id];
          const quizScore = quiz.question_ids.length;
          totalScore += score;
          fullscore += quizScore;
          return (
            <li key={quiz.id}>
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
      <button className="btn btn-primary" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default Finish;
