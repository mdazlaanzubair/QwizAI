import { useEffect, useState } from "react";
import { useUserAuth } from "../../../utilities/context/userAuth";
import {
  getAnswerFromModel,
  wakeUpQnaModel,
} from "../../../utilities/helpers/aiFunctions";
import { getQnaSessionFromDB } from "../../../utilities/helpers/qnaCrudFirebase";
import SaveQnaModel from "./SaveQnaModel";

const Ques_Ans = () => {
  // getting user info
  const { currentUser } = useUserAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // 1. creating states that holds whole qna data
  // i.e. context, question & answer
  const [paragraph, setParagraph] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // 2. object state that holds complete qna session
  // i.e. context, questions & answers, user details
  const [qnaSession, setQnaSession] = useState({
    para: paragraph,
    qna: [],
    userEmail: currentUser.email,
    userName: currentUser.displayName,
  });

  // 3. this hold all the qna sessions belongs to the logged in user
  // --> coming from firebase
  const [allQnaSessions, setAllQnaSessions] = useState();

  // function to prepare qna session i.e. "qnaSession"
  // and answer the question being asked
  const askQnaFromContext = async (para, ques) => {
    // changing loading state
    setIsLoading(true);

    // 1. answering the question
    if (isModelLoaded) {
      const answerResponse = await getAnswerFromModel({
        inputs: {
          context: para,
          question: ques,
        },
      });
      setAnswer(answerResponse.answer);
      console.log(answerResponse);
      console.log(answer);
    } else {
      console.log("Model is loading");
    }

    // 2. creating copy of "qnaSession.qna" array
    let newQna = [...qnaSession.qna];
    console.log("newQna=>", newQna);

    // 3. updating "newQna" with the newly received qna values
    newQna.push({ q: ques, a: answer });
    console.log("newQna.push=>", newQna);

    // 4. updating the "qnaSession" with updated values
    setQnaSession({
      ...qnaSession,
      para: para,
      qna: newQna,
    });
    console.log("setQnaSession=>", qnaSession);

    // emptying question fields for new questions
    setQuestion("");

    // changing loading state
    setIsLoading(false);
  };

  useEffect(() => {
    // getting all qna sessions of the logged in user from firebase
    getQnaSessionFromDB();

    // calling function on component load/mount to wake-up the model
    wakeUpQnaModel();

    // setting the isModelLoaded state value to true after 20 seconds
    const intervalId = setInterval(() => {
      setIsModelLoaded(true);
      console.log("Model Loaded Status", isModelLoaded);
    }, 20000);

    // cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="qna" className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-5">
        <div className="w-full lg:w-4/12 m-3">
          <form className="card shadow-lg">
            <div className="card-body text-center">
              <h2 className="card-title mx-auto">Ask Qwizbot</h2>
              <div className="form-control mb-2">
                <label className="label font-semibold" htmlFor="context">
                  Context
                </label>
                <textarea
                  id="context"
                  className="text-sm border-2 rounded-md p-3 border-slate-100 hover:border-slate-200 active:border-slate-300 focus:border-indigo-600 focus:outline-none"
                  placeholder="Paste paragraph here"
                  rows="5"
                  onChange={(e) => setParagraph(e.target.value)}
                  value={paragraph}
                ></textarea>
              </div>
              <div className="form-control mb-2">
                <label className="label font-semibold" htmlFor="question">
                  Question
                </label>
                <input
                  id="question"
                  className="text-sm border-2 rounded-md p-3 border-slate-100 hover:border-slate-200 active:border-slate-300 focus:border-indigo-600 focus:outline-none"
                  placeholder="Type your question here"
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                />
              </div>
              <div className="form-control mb-2">
                <button
                  type="button"
                  onClick={() => askQnaFromContext(paragraph, question)}
                  className="btn mb-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 border-none"
                >
                  Ask
                </button>
                <a
                  href="#save-qna-modal"
                  className="btn border-2 bg-transparent text-success hover:text-white border-success hover:border-transparent hover:bg-success active:bg-success"
                >
                  Save It
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-8/12 m-3">
          <h1 className="text-3xl lg:text-4xl mb-5 font-bold">
            Current QnA Sessions
          </h1>
          <div className="gap-3 columns-1">
            <div className="card min-h-fit shadow mb-4 bg-gray-50">
              <div className="card-body">
                <h2 className="card-title">Your Context Here</h2>
                <p className="mb-3">{paragraph}</p>
                <h2 className="card-title">Question Answers</h2>
                {qnaSession.qna.length > 0 ? (
                  <ul>
                    {qnaSession.qna.map((qna, index) => (
                      <li key={index}>
                        <strong>{qna.q}</strong>
                        <p>{qna.a.answer}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No questions answers asked yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-between items-start mb-5">
        <div className="w-full m-3">
          <h1 className="text-3xl lg:text-4xl mb-5 font-bold">
            Prevision QnA Sessions
          </h1>
          <div className="gap-3 columns-1 md:columns-2 lg:columns-3">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                className="card shadow mb-4 hover:shadow-lg bg-gray-50 hover:bg-gray-100"
                key={index}
              >
                <div className="card-body">
                  <h2 className="card-title">no border with shadow</h2>
                  <p>Rerum reiciendis beatae tenetur excepturi</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SAVE QnA POPUP MODAL */}
      <SaveQnaModel qnaSession={qnaSession} />
    </section>
  );
};

export default Ques_Ans;
