import quizzesJSON from "./data/quizzes.json";
import questionsJSON from "./data/questions.json";
import React from "react";
import Start from "./pages/Start";
import Finish from "./pages/Finish";
import Quiz from "./pages/Quiz";
import ProgressBar from "./components/ProgressBar";

const initState = { progress: -1, answers: {}, scores: {} };
const quizzes = quizzesJSON.quizzes;
const questionsObj = {};
questionsJSON.questions.forEach((question) => {
  questionsObj[question.id] = question;
});

function App() {
  const [record, setRecord] = React.useState(
    JSON.parse(localStorage.getItem("record")) || initState
  );
  const progress = record.progress;
  const amount = quizzes.length;

  const reset = () => {
    localStorage.removeItem("record");
    setRecord(initState);
  };

  React.useEffect(() => {
    if (localStorage.getItem("record") === null) {
      localStorage.setItem("record", JSON.stringify(initState));
    }
  }, []);

  return (
    <div className="App">
      {progress === -1 ? (
        <Start record={record} setRecord={setRecord} />
      ) : progress === amount ? (
        <Finish quizzes={quizzes} record={record} reset={reset} />
      ) : (
        <Quiz
          quizzes={quizzes}
          questions={questionsObj}
          record={record}
          setRecord={setRecord}
        />
      )}
      {progress > 0 && <ProgressBar progress={progress} amount={amount} />}
    </div>
  );
}

export default App;
