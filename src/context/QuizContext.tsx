import { createContext, useContext } from "react";

const QuizGameContext = createContext<number>(1);

const useQuizGameContext = () => {
  const questionNumber = useContext(QuizGameContext);
  return questionNumber;
};

// eslint-disable-next-line react-refresh/only-export-components
export { QuizGameContext, useQuizGameContext };
