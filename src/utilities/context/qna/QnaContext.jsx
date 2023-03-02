import { createContext, useContext, useState } from "react";

const QnaContext = createContext(null);

export const useQnaContext = () => useContext(QnaContext);

export default function QnaContextProvider({ children }) {
  // creating all qna states
  const [question, setQuestion] = useState(""); // holds question
  const [paragraph, setParagraph] = useState(""); // holds paragraph
  const [qna, setQna] = useState([]); // holds question and answers
  const [sessions, setSessions] = useState([]); // holds complete qna session

  // returning all to be consumed by Ques_Ans component
  const value = {
    question,
    setQuestion,
    paragraph,
    setParagraph,
    qna,
    setQna,
    sessions,
    setSessions,
  };
  return <QnaContext.Provider value={value}>{children}</QnaContext.Provider>;
}
