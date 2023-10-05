import { useState } from "react";
import "./App.scss";
// import Gameover from "./components/gameOver/Gameover";
import Quiz from "./components/quiz/Quiz";
import Recompensation from "./components/recompensation/Recompensation";
import Timer from "./components/timer/Timer";
import data from "./data/QuestionsAndAnswers";
import Gameover from "./components/gameOver/Gameover";
import { QuizGameContext } from "./context/QuizContext";
import Player from "./components/player/Player";
import { UserContext } from "./context/UserContext";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isGameover, setIsGameover] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("$ 0");
  const [username, setUsername] = useState("");

  return (
    <div className="app-container">
      <UserContext.Provider value={username}>
        {username ? (
          <QuizGameContext.Provider value={questionNumber}>
            {!isGameover ? (
              <>
                <div className="quiz-container">
                  <Timer setIsGameover={setIsGameover} />
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setIsGameover={setIsGameover}
                  />
                </div>
                <Recompensation setEarnedMoney={setEarnedMoney} />
              </>
            ) : (
              <>
                <Gameover
                  earnedMoney={earnedMoney}
                  setQuestionNumber={setQuestionNumber}
                  setIsGameover={setIsGameover}
                />
                <Recompensation setEarnedMoney={setEarnedMoney} />
              </>
            )}
          </QuizGameContext.Provider>
        ) : (
          <Player setUsername={setUsername} />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
