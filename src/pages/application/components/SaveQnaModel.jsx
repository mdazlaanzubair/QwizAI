import { useRef, useState } from "react";
import { createQnaSessionAtDB } from "../../../utilities/helpers/qnaCrudFirebase";

const SaveQnaModel = ({ qnaSession }) => {
  const title = useRef();

  const saveContextToDB = async () => {
    const session = {
      title: title.current.value,
      para: qnaSession.para,
      qna: qnaSession.qna,
      userName: qnaSession.userName,
      userEmail: qnaSession.userEmail,
    };
    const msg = await createQnaSessionAtDB(session);
    console.log(session);
    console.log(msg);
  };

  return (
    <div id="save-qna-modal" className="modal">
      <div className="modal-box">
        <div className="form-control mb-2">
          <label className="label font-semibold" htmlFor="title">
            Save this session for future reference
          </label>
          <input
            ref={title}
            id="title"
            className="text-sm border-2 rounded-md p-3 border-slate-100 hover:border-slate-200 active:border-slate-300 focus:border-indigo-600 focus:outline-none"
            placeholder="Name it something"
          />
        </div>
        <div className="modal-action flex justify-between">
          <a
            href="#save-qna-modal-close"
            className="btn rounded-md grow mb-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 border-none"
            onClick={() => saveContextToDB()}
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

export default SaveQnaModel;
