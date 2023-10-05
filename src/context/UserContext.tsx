import { createContext, useContext } from "react";

const UserContext = createContext<string>("");

const useUserContext = () => {
  const questionNumber = useContext(UserContext);
  return questionNumber;
};

// eslint-disable-next-line react-refresh/only-export-components
export { UserContext, useUserContext };
