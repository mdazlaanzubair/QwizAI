import { useEffect, useState } from "react";
import { getQnaSessionsFromDB } from "../../../utilities/helpers/qnaCrudFirebase";

const SavedQnaSessions = () => {
  // this hold all the qna sessions belongs to the logged in user
  // --> coming from firebase
  const [allQnaSessions, setAllQnaSessions] = useState([]);

  // function to fetch data from firebase and store in state
  const getData = () => {
    getQnaSessionsFromDB().then((sessions) => setAllQnaSessions(sessions));
  };

  // This runs every single time when component loads
  // fetch all qna sessions of the logged in user from firebase
  useEffect(() => {
    getData();
    console.log(allQnaSessions);
  }, []);

  // logging out "allQnaSessions" every time it updates
  useEffect(() => console.log(allQnaSessions), [allQnaSessions]);

  return (
    <div className="w-full m-3">
      <h1 className="flex justify-between text-3xl lg:text-4xl mb-5 font-bold">
        Prevision QnA Sessions
        <button type="button" onClick={() => getData()}>
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
      <div className="flex flex-col lg:flex-row">
        {allQnaSessions.length > 0 ? (
          allQnaSessions.map((qna, index) => (
            <div
              className="card shadow mb-4 hover:shadow-lg bg-gray-50 hover:bg-gray-100 m-3"
              key={index}
            >
              <div className="card-body">
                <h2 className="card-title">{qna.title}</h2>
                <p className="mb-3">{qna.para}</p>
                <h2 className="card-title">Question Answers</h2>
                {qna.qna.length > 0 ? (
                  <ul>
                    {qna.qna.map((qna, index) => (
                      <li
                        key={index}
                        className="mb-3 border-l-4 p-3 hover:border-indigo-600 transition-all ease-in-out duration-500 hover:shadow-lg rounded-r-md"
                      >
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
          ))
        ) : (
          <div className="card shadow mb-4 hover:shadow-lg bg-gray-50 hover:bg-gray-100">
            <div className="card-body">
              <h2 className="card-title">Nothing to display</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedQnaSessions;
