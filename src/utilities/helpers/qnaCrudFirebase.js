import { firebaseDB } from "./firebaseConfig";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { async } from "@firebase/util";

const qnaCollectionRef = collection(firebaseDB, "question_ans");

// function to grab all qna sessions from firebase
export const getQnaSessionFromDB = async () => {
  const data = await getDocs(qnaCollectionRef);
  const allQnaSessions = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return allQnaSessions;
};

// function to create new qna session in firebase
export const createQnaSessionAtDB = async (session) => {
  await addDoc(qnaCollectionRef, session);
  return "QnA Created.";
};
