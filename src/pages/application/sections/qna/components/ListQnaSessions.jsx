import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useQnaContext } from "../../../../../utilities/context/qna/QnaContext";
import { getQnaSessionsFromDB } from "../../../../../utilities/helpers/firebase-helpers/crud/qnaSessions";

const ListQnaSessions = () => {
  const { sessions, setSessions } = useQnaContext();
  console.log();

  useEffect(() => {
    getQnaSessionsFromDB().then((fetchedSessions) =>
      setSessions(fetchedSessions)
    );
  }, []);

  return (
    <div className="w-full my-3">
      {/* <div className="grid grid-flow-col grid-cols-1 lg:grid-flow-row lg:grid-cols-3 gap-3"> */}
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
                    <span className="link-primary font-bold">Copy Context</span>
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
      {/* </div> */}
    </div>
  );
};

export default ListQnaSessions;
