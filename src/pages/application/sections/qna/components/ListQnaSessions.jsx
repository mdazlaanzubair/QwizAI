import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useQnaContext } from "../../../../../utilities/context/qna/QnaContext";
import { getQnaSessionsFromDB } from "../../../../../utilities/helpers/firebase-helpers/crud/qnaSessions";

const ListQnaSessions = () => {
  const { sessions, setSessions } = useQnaContext();

  // refresh function to fetch data from firebase
  const fetchIt = () =>
    getQnaSessionsFromDB().then((fetchedSessions) =>
      setSessions(fetchedSessions)
    );

  useEffect(() => {
    fetchIt();
  }, []);

  return (
    <div className="w-full my-3">
      <div className="flex flex-col w-full">
        <h1 className="flex justify-between text-3xl lg:text-4xl mb-5 font-bold">
          Prevision QnA Sessions
          <button type="button" onClick={() => fetchIt()}>
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
        <p>Here is the list of AI powered QnA sessions you saved previously.</p>
      </div>
      <div className="flex flex-col w-full">
        <div className="columns-1 md:columns-2">
          {sessions.length > 0 ? (
            sessions.map((session, index) => (
              <div
                key={index}
                tabIndex={index}
                className="collapse p-3 w-full rounded-box collapse-plus mb-3 focus:shadow-lg border-2 focus:border-indigo-600"
              >
                <div className="collapse-title text-xl font-bold">
                  {session.title}
                </div>
                <div className="collapse-content">
                  <p>
                    List of Question/Answers against{" "}
                    <strong>{session.title}</strong> session.{" "}
                    <CopyToClipboard
                      text={session.para}
                      onCopy={() =>
                        // generating alert to inform user
                        toast.success("Context copied successfully!", {
                          position: "top-right",
                        })
                      }
                    >
                      <span className="link-primary font-bold">
                        Copy Context
                      </span>
                    </CopyToClipboard>
                  </p>

                  <ul className="my-5">
                    {session.qna.length > 0 ? (
                      session.qna.map((item, index) => (
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
                            <h1 className="text-lg lg:text-xl font-bold">
                              {item.q}
                            </h1>
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
        </div>
      </div>
    </div>
  );
};

export default ListQnaSessions;
