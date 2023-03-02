import { useState } from "react";
import { toast } from "react-toastify";
import { useQnaContext } from "../../../../../utilities/context/qna/QnaContext";
import { useUserAuth } from "../../../../../utilities/context/auth/AuthContext";
import { createQnaSessionAtDB } from "../../../../../utilities/helpers/firebase-helpers/crud/qnaSessions";
import { useAppContext } from "../../../../../utilities/context/app/AppContext";

const SaveQnaSessions = () => {
  const [title, setTitle] = useState();
  // getting states from context
  const { currentUser } = useUserAuth();
  const { setIsProcessing } = useAppContext();
  const { paragraph, qna } = useQnaContext();

  // function to update title in qnaSession
  const saveSessionToDB = async () => {
    // changing processing state
    setIsProcessing(true);

    // creating session
    const session = {
      title: title,
      para: paragraph,
      qna: qna,
      user: {
        email: currentUser.email,
        name: currentUser.displayName,
      },
    };

    // calling firebase function to save session to the cloud
    const msg = await createQnaSessionAtDB(session);

    // generating alert to inform user
    toast.success(msg, {
      position: "top-right",
    });

    // changing processing state
    setIsProcessing(false);
  };

  return (
    <div id="save-qna-modal" className="modal text-gray-900">
      <div className="modal-box">
        <div className="form-control mb-2">
          <label className="label font-semibold" htmlFor="title">
            Save this session for future reference
          </label>
          <input
            id="title"
            className="text-sm border-2 rounded-md p-3 border-slate-100 hover:border-slate-200 active:border-slate-300 focus:border-indigo-600 focus:outline-none"
            placeholder="Name it something"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="modal-action flex justify-between">
          <a
            href="#save-qna-modal-close"
            className="btn rounded-md grow mb-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 border-none"
            onClick={() => saveSessionToDB()}
          >
            Save
          </a>
          <a
            href="#save-qna-modal-close"
            className="btn rounded-md grow border-2 bg-transparent text-error hover:text-white border-error hover:border-transparent hover:bg-error active:bg-error"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaveQnaSessions;
