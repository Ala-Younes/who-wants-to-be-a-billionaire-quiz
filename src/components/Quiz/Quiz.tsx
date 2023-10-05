import { useCallback, useEffect, useState } from "react";
import { AnswerType, QuestionAnswerType } from "../../schema/quizSchema";
import "./Quiz.scss";
import delay from "../../utils/Delay";
import shuffle from "../../utils/Shuffle";

type Props = {
  data: QuestionAnswerType;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  setIsGameover: React.Dispatch<React.SetStateAction<boolean>>;
};

const Quiz = ({
  data,
  questionNumber,
  setQuestionNumber,
  setIsGameover,
}: Props) => {
  const [questionStyle, setQuestionStyle] = useState("quiz__answers__answer");
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerType>();
  const [shuffledAnswers, setShuffledAnswers] = useState<AnswerType[]>([]);

  const triggeredQuestion = data[questionNumber - 1];

  // Shuffle the answers only once when the component is mounted
  useEffect(() => {
    const shuffled = shuffle([...triggeredQuestion.answers]);
    setShuffledAnswers(shuffled);
  }, [triggeredQuestion.answers]);

  const handleAnswerClick = useCallback(
    (answer: AnswerType) => {
      setSelectedAnswer(answer);
      const isCorrect = answer.correct;

      setQuestionStyle("quiz__answers__answer");
      setQuestionStyle((prev) =>
        isCorrect
          ? `${prev} quiz__answers__answer--correct`
          : `${prev} quiz__answers__answer--wrong`
      );

      delay(2000, () => {
        if (isCorrect) {
          setQuestionNumber((prev) => prev + 1);
        } else {
          setIsGameover(true);
        }
      });
    },
    [setQuestionNumber, setIsGameover]
  );

  return (
    <div className={"quiz"}>
      <div className="quiz__question">{triggeredQuestion.question}</div>
      <div className="quiz__answers">
        {}
        {shuffledAnswers.map((ans) => (
          <div
            onClick={() => handleAnswerClick(ans)}
            className={
              selectedAnswer === ans ? questionStyle : "quiz__answers__answer"
            }
            key={ans.text}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
