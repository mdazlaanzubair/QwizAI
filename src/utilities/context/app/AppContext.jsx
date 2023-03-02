import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  // creating all qna states
  const [theme, setTheme] = useState("light"); // holds state of theme selected
  const [isProcessing, setIsProcessing] = useState(false); // holds state of qna request processing
  const [isModelLoaded, setIsModelLoaded] = useState(false); // holds state of qna model loaded

  // returning all to be consumed by Ques_Ans component
  const value = {
    theme,
    setTheme,
    isProcessing,
    setIsProcessing,
    isModelLoaded,
    setIsModelLoaded,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
