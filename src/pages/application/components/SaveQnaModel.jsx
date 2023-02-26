import { useRef, useState } from "react";

const SaveQnaModel = ({ qnaSession }) => {
  const title = useRef();

  const saveContextToDB = () => {
    console.log("Session Submitted");
    const session = {
      title: title.current.value,
      para: qnaSession.para,
      qna: qnaSession.qna,
      userName: qnaSession.userName,
      userEmail: qnaSession.userEmail,
    };
    console.log(session);
  };

  return (
    <div id="save-qna-modal" className="modal">
      <div className="modal-box">
        <div className="form-control mb-2">
          <label className="label font-semibold" htmlFor="title">
            Title
          </label>
          <input
            ref={title}
            id="title"
            className="text-sm border-2 rounded-md p-3 border-slate-100 hover:border-slate-200 active:border-slate-300 focus:border-indigo-600 focus:outline-none"
            placeholder="Name this session"
          />
        </div>
        <div className="modal-action">
          <a
            href="#save-qna-modal-close"
            className="btn btn-primary"
            onClick={() => saveContextToDB()}
          >
            Save
          </a>
          <a href="#save-qna-modal-close" className="btn">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaveQnaModel;
