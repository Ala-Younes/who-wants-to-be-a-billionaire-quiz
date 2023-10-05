import { useState } from "react";
import "./App.scss";
// import Gameover from "./components/gameOver/Gameover";
import Quiz from "./components/quiz/Quiz";
import Recompensation from "./components/recompensation/Recompensation";
import Timer from "./components/timer/Timer";
import data from "./data/QuestionsAndAnswers";
import Gameover from "./components/gameOver/Gameover";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isGameover, setIsGameover] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("$ 0");

  return (
    <div className="app-container">
      {!isGameover ? (
        <>
          <div className="quiz-container">
            <Timer
              setIsGameover={setIsGameover}
              questionNumber={questionNumber}
            />
            <Quiz
              data={data}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setIsGameover={setIsGameover}
            />
          </div>
          <Recompensation
            questionNumber={questionNumber}
            setEarnedMoney={setEarnedMoney}
          />
        </>
      ) : (
        <>
          <Gameover
            earnedMoney={earnedMoney}
            setQuestionNumber={setQuestionNumber}
            setIsGameover={setIsGameover}
          />
          <Recompensation
            questionNumber={questionNumber}
            setEarnedMoney={setEarnedMoney}
          />
        </>
      )}
    </div>
  );
}

export default App;
