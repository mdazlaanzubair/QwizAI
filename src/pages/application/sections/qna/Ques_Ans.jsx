import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useAppContext } from "../../../../utilities/context/app/AppContext";
import { useQnaContext } from "../../../../utilities/context/qna/QnaContext";
import { wakeUpModel } from "../../../../utilities/helpers/ai-helpers/qnaFunctions";
import { ModelLoader, ProcessingLoader } from "../../components/Loader";
import ListQnaSessions from "./components/ListQnaSessions";
import QnaForm from "./components/QnaForm";

const Ques_Ans = () => {
  const { qna } = useQnaContext();
  const { isProcessing, isModelLoaded, setIsModelLoaded } = useAppContext();

  // performing check for model load
  // before proceeding to qna
  useEffect(() => {
    if (!isModelLoaded) {
      const msg = wakeUpModel();

      // generating alert to inform user
      toast.success(msg.msg, {
        position: "top-right",
      });

      // setting state for model loaded
      setIsModelLoaded(true);
    }
  }, [isModelLoaded]);

  return (
    <section id="qna" className="container mx-auto">
      {/* loading states of the application */}
      {isProcessing ? (
        <ProcessingLoader />
      ) : !isModelLoaded ? (
        <ModelLoader />
      ) : (
        ""
      )}
      <div className="flex flex-col lg:flex-row justify-center px-10">
        <div className="flex flex-col w-full m-3 lg:w-4/12">
          <h1 className="text-3xl lg:text-4xl mb-5 font-bold">Ask Qwizbot</h1>
          <p>
            Just paste the paragraph, start asking question and see the power of
            AI.
          </p>
          <QnaForm />
        </div>
        <div className="flex flex-col w-full m-3 lg:w-8/12">
          <h1 className="text-3xl lg:text-4xl mb-5 font-bold">
            Current QnA Session
          </h1>
          <p>Here is the list of AI powered QnA.</p>
          <ul className="my-5">
            {qna.length > 0 ? (
              qna.map((item, index) => (
                <CopyToClipboard
                  key={index}
                  text={item.a.answer}
                  onCopy={() =>
                    // generating alert to inform user
                    toast.success("Answer copied successfully!", {
                      position: "top-right",
                    })
                  }
                >
                  <li className="border-l-4 rounded-tr-md rounded-br-md bg-gray-50 px-3 py-5 hover:shadow-md hover:border-indigo-600 transition-all ease-in-out duration-300 my-2">
                    <h1 className="text-lg lg:text-xl font-bold">{item.q}</h1>
                    <p>{item.a.answer}</p>
                  </li>
                </CopyToClipboard>
              ))
            ) : (
              <CopyToClipboard
                text="Nothing to copy"
                onCopy={() =>
                  // generating alert to inform user
                  toast.info("Nothing to copy!", {
                    position: "top-right",
                  })
                }
              >
                <li className="rounded-md bg-gray-50 px-3 py-5 shadow-sm">
                  <h1 className="text-lg lg:text-xl font-bold text-center">
                    No question to display
                  </h1>
                </li>
              </CopyToClipboard>
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center px-10 my-5">
        <div className="flex flex-col w-full m-3">
          <h1 className="flex justify-between text-3xl lg:text-4xl mb-5 font-bold">
            Prevision QnA Sessions
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </h1>
          <p>
            Here is the list of AI powered QnA sessions you saved previously.
          </p>
        </div>
        <div className="flex flex-col w-full m-3">
          <ListQnaSessions />
        </div>
      </div>
    </section>
  );
};

export default Ques_Ans;
