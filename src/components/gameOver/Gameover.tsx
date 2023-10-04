import "./Gameover.scss";

type Props = {
  setIsGameover: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  earnedMoney: string;
};
const Gameover = ({
  setIsGameover,
  earnedMoney,
  setQuestionNumber,
}: Props) => {


  return (
    <div className="gameover">
      <span>You earned : {earnedMoney}</span>
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
