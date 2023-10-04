import { useState } from "react";
import { AnswerType, QuestionAnswerType } from "../../schema/quizSchema";
import "./Quiz.scss";

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

  const triggeredQuestion = data[questionNumber - 1];

  const handleAnswerClick = (answer: AnswerType) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setQuestionStyle("quiz__answers__answer");
      setQuestionStyle((prev) => `${prev} quiz__answers__answer--correct`);
      setQuestionNumber((prev) => prev + 1);
    } else {
      setQuestionStyle("quiz__answers__answer");
      setQuestionStyle((prev) => `${prev} quiz__answers__answer--wrong`);
      setIsGameover(true);
    }
  };
  return (
    <div className={"quiz"}>
      <div className="quiz__question">{triggeredQuestion.question}</div>
      <div className="quiz__answers">
        {triggeredQuestion.answers.map((ans) => (
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
