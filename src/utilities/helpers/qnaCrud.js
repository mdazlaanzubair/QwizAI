import { firebaseDB } from "./firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

const qnaCollectionRef = collection(firebaseDB, "question_ans");

// function to grab all data from database
export const getQnaSessionFromDB = async (ques) => {
  const data = await getDocs(qnaCollectionRef);
  const allQnaSessions = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return allQnaSessions;
};
