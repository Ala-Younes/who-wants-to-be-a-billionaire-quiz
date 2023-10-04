import { QuestionAnswerType } from "../../schema/quizSchema";
import "./Quiz.scss";

type Props = {
  data: QuestionAnswerType;
};

const Quiz = ({ data }: Props) => {
  return (
    <div className={"quiz"}>
      <div className="quiz__question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ullam.
      </div>
      <div className="quiz__answers">
        {["answer1", "answer2", "answer3", "answer4"].map((ans) => (
          <div className="quiz__answers__answer" key={ans}>
            {ans}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
