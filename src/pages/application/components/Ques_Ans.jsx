import { useEffect, useRef } from "react";

const Ques_Ans = () => {
  const { form, context, question } = useRef();

  

  useEffect(() => {form.current.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
  });}, []);

  return (
    <section id="qna" className="container">
      <div className="flex flex-col lg:flex-row justify-center items-start mx-auto">
        <div className="w-full lg:w-1/2 m-2 px-4">
          <h1 className="text-lg text-indigo-600 font-bold">Welcome to</h1>
          <h1 className="sm:text-4xl text-3xl font-bold">QnA Service</h1>
          <p className="text-lg font-medium my-3">
            A state-of-the-art question answering system that can extract
            relevant answers from any given context or paragraph.
          </p>
          <p className="text-base">
            It is perfect for individuals and businesses alike who want to
            quickly and easily find the answers they need. Whether you're a
            student researching a topic, a business professional looking for
            quick answers to customer inquiries, or just someone who needs help
            understanding a concept, our QnA service can help.
          </p>{" "}
          <h3 className="mt-5 text-lg font-semibold ">Here is how it works:</h3>
          <ul className="max-w-full space-y-1 list-inside">
            <li className="flex items-start my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-indigo-600 w-6 h-6 mr-5 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p>
                <strong className="font-bold capitalize">
                  Upload your context:
                </strong>{" "}
                You can either copy and paste your context into the text box or
                upload a document. Our system is designed to work with a wide
                variety of file formats, including PDF, DOCX, and TXT.
              </p>
            </li>
            <li className="flex items-start my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-indigo-600 w-6 h-6 mr-5 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p>
                <strong className="font-bold capitalize">
                  Enter your question:
                </strong>{" "}
                Simply type your question or query into the provided input field
                on our homepage.
              </p>
            </li>
            <li className="flex items-start my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-indigo-600 w-6 h-6 mr-5 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p>
                <strong className="font-bold capitalize">
                  Enter your question:
                </strong>{" "}
                Qwizbot will analyze the context you provided and extract the
                most relevant answer to your question. The answer will be
                displayed on the page along with the source document and any
                additional context you provided.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 m-2 px-4">
          <form ref={form} className="w-full my-5 shadow-2xl rounded-box p-5">
            <h2 className="sm:text-4xl text-3xl font-bold">
              Ask{" "}
              <strong className="border-b-4 border-indigo-600">Qwizbot</strong>
            </h2>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Paragraph</span>
              </label>
              <textarea
                ref={context}
                rows="8"
                className="textarea h-auto outline-none border-0 textarea-primary bg-slate-100"
                placeholder="Your context goes here..."
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Question</span>
              </label>
              <input
                ref={question}
                type="text"
                placeholder="Your question goes here..."
                className="input outline-none border-0 input-primary bg-slate-100"
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Extract Answer"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Ques_Ans;
