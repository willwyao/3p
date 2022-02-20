import React from "react";
import Question from "../components/Question";

const Quiz = ({ quizzes, questions, record, setRecord }) => {
  const progress = record.progress;
  const quiz = quizzes[progress];

  //counting finished questions' amount, enable submit button once all questions are finished
  const finishedQuestions = Object.keys(record.answers).filter((key) =>
    key.startsWith(quiz.id)
  ).length;
  const isFinished =
    finishedQuestions === quiz.question_ids.length ? true : false;

  const submitQuiz = () => {
    let score = 0;
    const currentAnswerIds = Object.keys(record.answers).filter((key) =>
      key.startsWith(quiz.id)
    );
    currentAnswerIds.forEach((id) => {
      const answer = record.answers[id];
      const qId = id.split("-")[1]; //answerId has a quizId-questionId format
      if (answer === questions[qId].correct_answer) {
        score++;
      }
    });
    const scores = record.scores;
    const newScores = { ...scores, [quiz.id]: score };
    const newRecord = {
      ...record,
      scores: newScores,
      progress: record.progress + 1,
    };
    localStorage.setItem("record", JSON.stringify(newRecord));
    setRecord(newRecord);
  };

  return (
    <div className="container">
      <h1>{quiz.title}</h1>
      <p>
        Please answer all questions below, then click the button to continue.
      </p>
      <form>
        <ul>
          {quiz.question_ids.map((questionId) => {
            return (
              <Question
                key={questionId}
                question={questions[questionId]}
                quizId={quiz.id}
                setRecord={setRecord}
                record={record}
              />
            );
          })}
        </ul>

        {isFinished && (
          <button className="btn btn-primary" onClick={submitQuiz}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Quiz;
