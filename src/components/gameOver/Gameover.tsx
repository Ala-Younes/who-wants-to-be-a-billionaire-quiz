import { useUserContext } from "../../context/UserContext";
import "./Gameover.scss";

type Props = {
  setIsGameover: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  earnedMoney: string;
};
const Gameover = ({ setIsGameover, earnedMoney, setQuestionNumber }: Props) => {
  const username = useUserContext();
  return (
    <div className="gameover">
      <span className="gameover__result">
        {username} earned :
        <span className="gameover__result--amount">{earnedMoney}</span>
      </span>
      <button
        onClick={() => {
          setQuestionNumber(1);
          setIsGameover(false);
        }}
        className="gameover__replayBtn"
      >
        Replay
      </button>
    </div>
  );
};

export default Gameover;
