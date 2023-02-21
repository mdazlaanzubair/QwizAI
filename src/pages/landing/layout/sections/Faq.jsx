import { content } from "../../../../utilities/constants/data";

const Faq = () => {
  return (
    <section id="faq" className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-start">
        <div className="w-full lg:w-1/2 py-8 border-gray-200 mx-auto">
          <p className="py-3 text-indigo-600 uppercase text-xs font-bold lg:text-left text-center">
            Have any question?
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl text-gray-900 lg:text-left text-center">
            Frequently Asked Questions
          </h1>
          <p className="leading-relaxed text-base pt-3 lg:text-left text-center">
            This section addresses some common questions that users may have
            about <strong className="text-primary">Qwizbot</strong>. Whether
            you're a new or existing user, these answers can help you make the
            most of our AI-powered tools.
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 md:pl-12">
          <div className="space-y-4">
            {content.faq.map((item, index) => (
              <details
                key={index}
                className="group border-l-4 open:border-indigo-600 bg-gray-50 p-6"
                // open={index === 1 ? true : false}
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.q}
                  </h2>

                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
