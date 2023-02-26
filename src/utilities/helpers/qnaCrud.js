import { firebaseDB } from "./firebaseConfig";
import { collection } from "@firebase/firestore";

export const saveQnaSessionToDB = async (ques) => {
  const qnaCollectionRef = collection(firebaseDB, "question_ans");
};
