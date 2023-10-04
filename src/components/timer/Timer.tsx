import { useEffect, useState } from "react";
import "./Timer.scss";

type Props = {
  questionNumber: number;
};

const Timer = ({ questionNumber }: Props) => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const intervalBySecond = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalBySecond);
  }, [questionNumber]);

  useEffect(() => {
    counter === 0 && setCounter(30);
  }, [counter]);

  return (
    <div className="timer-container">
      <div className="timer-container__counter">{counter}</div>
    </div>
  );
};

export default Timer;
