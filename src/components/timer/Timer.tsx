import { useEffect, useState } from "react";
import "./Timer.scss";

type Props = {
  questionNumber: number;
  setIsGameover: React.Dispatch<React.SetStateAction<boolean>>;
};

const Timer = ({ questionNumber, setIsGameover }: Props) => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const intervalBySecond = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalBySecond);
  }, []);

  useEffect(() => {
    questionNumber && setCounter(30);
  }, [questionNumber]);

  useEffect(() => {
    counter === 0 && setIsGameover(true);
  }, [counter, setIsGameover]);

  return (
    <div className="timer-container">
      <div
        className={`${
          counter <= 5
            ? "timer-container__counter timer-container__counter--no-time"
            : "timer-container__counter"
        }`}
      >
        {counter}
      </div>
    </div>
  );
};

export default Timer;
