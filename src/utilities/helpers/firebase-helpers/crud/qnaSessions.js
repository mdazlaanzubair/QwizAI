import { firebaseDB } from "../../firebaseConfig";
import { collection, getDocs, addDoc } from "@firebase/firestore";

const qnaCollectionRef = collection(firebaseDB, "qna_sessions");

// function to grab all qna sessions from firebase
export const getQnaSessionsFromDB = async () => {
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
  return "Your session is successfully saved!";
};
