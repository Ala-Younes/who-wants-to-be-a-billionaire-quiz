import { useEffect } from "react";
import moneyPyramid from "../../data/MoneyPyramid";
import "./Recompensation.scss";
import { useQuizGameContext } from "../../context/QuizContext";

type Props = {
  setEarnedMoney: React.Dispatch<React.SetStateAction<string>>;
};

const Recompensation = ({ setEarnedMoney }: Props) => {
  const questionNumber = useQuizGameContext();

  useEffect(() => {
    questionNumber > 1 &&
      setEarnedMoney(() => {
        const previousAmount =
          moneyPyramid?.find((m) => m.id === questionNumber - 1)?.amount ??
          "0 $";
        return previousAmount;
      });

    questionNumber <= 1 &&
      setEarnedMoney(() => {
        const previousAmount = "0 $";
        return previousAmount;
      });
  }, [setEarnedMoney, questionNumber]);

  return (
    <div className="moneyPyramid">
      {[...moneyPyramid].reverse().map((earnedMoney) => (
        <div
          key={earnedMoney.id}
          className={`moneyPyramid__gain ${
            questionNumber === earnedMoney.id && "active"
          }`}
        >
          <span className="moneyPyramid__gain--number">{earnedMoney.id}</span>
          <span className="moneyPyramid__gain--amount">
            {earnedMoney.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Recompensation;
