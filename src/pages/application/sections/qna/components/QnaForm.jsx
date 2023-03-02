import { toast } from "react-toastify";
import { useAppContext } from "../../../../../utilities/context/app/AppContext";
import { useQnaContext } from "../../../../../utilities/context/qna/QnaContext";
import { getAnswer } from "../../../../../utilities/helpers/ai-helpers/qnaFunctions";
import SaveQnaSessions from "./SaveQnaSessions";

const QnaForm = () => {
  // getting states from context
  const { question, setQuestion, paragraph, setParagraph, qna, setQna } =
    useQnaContext();
  const { setIsProcessing } = useAppContext();

  // function to process answers using AI
  const askQuestion = async () => {
    // changing processing state
    setIsProcessing(true);

    // calling AI function
    const answer = await getAnswer({
      inputs: {
        question: question,
        context: paragraph,
      },
    });

    // storing qna sessions in local storage
    setQna([{ q: question, a: answer }, ...qna]);

    // emptying question field for next question
    setQuestion("");

    // changing processing state
    setIsProcessing(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center my-3 p-5 shadow-md rounded-md">
        <div className="form-control my-3">
          <label htmlFor="context" className="text-base font-bold mb-2">
            Context
          </label>
          <textarea
            id="context"
            className="rounded-md h-12 overflow-hidden p-3 border-2 border-gray-100 hover:border-gray-200 active:border-gray-300 focus:border-indigo-600 focus:h-36 outline-none transition-all ease-in-out duration-500"
            placeholder="Paste your text here..."
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
          ></textarea>
        </div>
        <div className="form-control my-3">
          <label htmlFor="question" className="text-base font-bold mb-2">
            Question
          </label>
          <input
            type="text"
            id="question"
            className="rounded-md p-3 border-2 border-gray-100 hover:border-gray-200 active:border-gray-300 focus:border-indigo-600 outline-none transition-all ease-in-out duration-500"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="form-control my-3 flex flex-col lg:flex-row justify-center">
          <button
            onClick={() => askQuestion()}
            type="text"
            className="lg:mx-2 btn btn-primary bg-indigo-600 grow"
          >
            Ask it out!
          </button>
          <div className="btn-group lg:mx-2">
            <a href="#save-qna-modal" className=" btn btn-neutral shrink">
              Save
            </a>
            <button
              onClick={() => {
                setQuestion("");
                setParagraph("");
                setQna([]);
                // generating alert to inform user
                toast.success("All cleared successfully!", {
                  position: "top-right",
                });
              }}
              type="text"
              className="btn btn-outline btn-neutral shrink"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* QNA SESSIONS POPUP FORM */}
      <SaveQnaSessions />
    </div>
  );
};

export default QnaForm;
