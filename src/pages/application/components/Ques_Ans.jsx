import { useEffect, useRef, useState } from "react";
import { useUserAuth } from "../../../utilities/context/userAuth";
import { getQnaSessionFromDB } from "../../../utilities/helpers/qnaCrud";
import SaveQnaModel from "./SaveQnaModel";

const Ques_Ans = () => {
  // getting user info
  const { currentUser } = useUserAuth();

  // creating form references
  const context = useRef(null);
  const question = useRef(null);

  // states to hold information of qna
  const [qnaSession, setQnaSession] = useState({
    para: "",
    qna: [],
    userEmail: currentUser.email,
    userName: currentUser.displayName,
  });
  const [answer, setAnswer] = useState("");

  // function to get answers from qna model
  const askQnaFromContext = () => {
    // grabbing form inputs
    const para = context.current.value;
    const ques = question.current.value;

    // preparing qna session as follows:
    // 1. creating copy of "qnaSession.qna" array
    // 2. updating "newQna" with the newly received qna values
    // 3. updating the "qnaSession" with updated values
    let newQna = [...qnaSession.qna];
    newQna.push({ q: ques, a: answer });
    setQnaSession({
      ...qnaSession,
      para: para,
      qna: newQna,
    });

    // emptying form fields
    question.current.value = "";
  };

  useEffect(() => {
    getQnaSessionFromDB();

    console.log(qnaSession);
  }, [qnaSession]);

  return (
    <section id="qna" className="container mx-auto">
      {/* MAIN QNA COMPONENT */}
      <div className="flex flex-col lg:flex-row-reverse justify-between items-start">
        {/* RIGHT SIDE FORM COMPONENT */}
        <div className="w-full lg:w-4/12 m-3">
          <form className="card shadow-lg">
            <div className="card-body text-center">
              <h2 className="card-title mx-auto">Ask Qwizbot</h2>
              <div className="form-control mb-2">
                <label className="label font-semibold" htmlFor="context">
                  Context
                </label>
                <textarea
                  ref={context}
                  id="context"
                  className="text-sm border-2 rounded-md p-3 border-slate-100 hover:border-slate-200 active:border-slate-300 focus:border-indigo-600 focus:outline-none"
                  placeholder="Paste paragraph here"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-control mb-2">
                <label className="label font-semibold" htmlFor="question">
                  Question
                </label>
                <input
                  ref={question}
                  id="question"
                  className="text-sm border-2 rounded-md p-3 border-slate-100 hover:border-slate-200 active:border-slate-300 focus:border-indigo-600 focus:outline-none"
                  placeholder="Type your question here"
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
                  className="btn border-2 bg-transparent text-indigo-500 hover:text-white border-indigo-500 hover:border-transparent hover:bg-indigo-600 active:bg-indigo-700"
                >
                  Save It
                </a>
              </div>
            </div>
          </form>
        </div>
        {/* LEFT SIDE ANSWER AND PREVIOUS QnA SESSIONS COMPONENT */}
        <div className="w-full lg:w-8/12 m-3">
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
