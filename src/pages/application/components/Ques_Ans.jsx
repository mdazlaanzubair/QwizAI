import { useEffect, useState } from "react";
import { useUserAuth } from "../../../utilities/context/userAuth";
import {
  getAnswerFromModel,
  wakeUpQnaModel,
} from "../../../utilities/helpers/aiFunctions";
import Loader from "./Loader";
import SavedQnaSessions from "./SavedQnaSessions";
import SaveQnaModel from "./SaveQnaModel";

const Ques_Ans = () => {
  // getting user info
  const { currentUser } = useUserAuth();

  // setting loading states one for model & other for qna processing
  const [isProcessing, setIsProcessing] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // 1. creating states that holds whole qna data
  // i.e. context, question & answer
  const [paragraph, setParagraph] = useState("");
  const [question, setQuestion] = useState("");

  // 2. object state that holds complete qna session
  // i.e. context, questions & answers, user details
  const [qnaSession, setQnaSession] = useState({
    para: "",
    qna: [],
    user: {
      name: currentUser.displayName,
      email: currentUser.email,
    },
  });

  // function to prepare qna session i.e. "qnaSession"
  // and answer the question being asked
  const askQnaFromContext = async () => {
    // checking if model loaded or otherwise
    if (!isModelLoaded) return console.log("Model is loading...");

    // changing processing state
    setIsProcessing(true);
    console.log("Is it loading", isProcessing);

    // 1. answering the question
    const answer = await getAnswerFromModel({
      inputs: {
        context: paragraph,
        question: question,
      },
    });

    // 2. creating copy of "qnaSession.qna" array as "newQna"
    let newQna = [...qnaSession.qna];

    // 3. pushing question & answer object in the array
    newQna.push({ q: question, a: answer });

    // 4. updating the "qnaSession" with the updated values
    setQnaSession({
      ...qnaSession,
      para: paragraph,
      qna: newQna,
    });

    // emptying question fields for new questions
    setQuestion("");

    // changing processing state
    setIsProcessing(false);
  };

  // This runs every single time when component loads
  // runs the function to check if AI model is live
  useEffect(() => {
    wakeUpQnaModel().then((modelStatus) => {
      if (modelStatus.status === 200) {
        setIsModelLoaded(true);
        console.log(modelStatus);
      }
    });
  }, []);

  // logging out "qnaSession" every time it updates
  useEffect(() => console.log(qnaSession), [qnaSession]);

  return !isModelLoaded ? (
    <Loader />
  ) : (
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
                  onClick={() => askQnaFromContext()}
                  className="btn mb-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 border-none"
                >
                  Ask
                </button>
                <a
                  href="#save-qna-modal"
                  className="btn mb-3 border-2 hover:bg-transparent hover:text-success text-white hover:border-success border-success bg-success active:bg-success"
                >
                  Save It
                </a>
                <button
                  type="button"
                  className="btn border-2 bg-transparent text-error hover:text-white border-error hover:border-transparent hover:bg-error active:bg-error"
                  onClick={() => {
                    setQuestion("");
                    setParagraph("");
                    setQnaSession({
                      para: "",
                      qna: [],
                      user: {
                        name: currentUser.displayName,
                        email: currentUser.email,
                      },
                    });
                  }}
                >
                  Clear All
                </button>
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
                      <li
                        key={index}
                        className="mb-3 border-l-4 p-3 hover:border-indigo-600 transition-all ease-in-out duration-500 hover:shadow-lg rounded-r-md"
                      >
                        <strong>{qna.q}</strong>
                        <p>
                          {isProcessing
                            ? "Wait while answer is processing..."
                            : qna.a?.answer}
                        </p>
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
        <SavedQnaSessions />
      </div>
      {/* SAVE QnA POPUP MODAL */}
      <SaveQnaModel qnaSession={qnaSession} />
    </section>
  );
};

export default Ques_Ans;
