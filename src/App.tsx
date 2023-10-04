import "./App.scss";
// import Gameover from "./components/gameOver/Gameover";
import Quiz from "./components/quiz/Quiz";
import Recompensation from "./components/recompensation/Recompensation";
import Timer from "./components/timer/Timer";
import data from "./data/QuestionsAndAnswers";

function App() {
  return (
    <div className="app-container">
      <div className="quiz-container">
        <Timer />
        <Quiz data={data} />
      </div>
      <Recompensation />
      {/* <Gameover /> */}
    </div>
  );
}

export default App;
