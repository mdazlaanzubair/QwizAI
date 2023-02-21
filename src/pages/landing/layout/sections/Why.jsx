import { content } from "../../../../utilities/constants/data";

const Why = () => {
  return (
    <section id="why">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-start lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why <strong className="text-primary">Qwizbot</strong>?
            </h2>

            <p className="mt-4 text-gray-600">{content.why.para1}</p>
            <p className="mt-4 text-gray-600">{content.why.para2}</p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Give it a shot
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {content.why.qna.map((item, index) => (
              <div
                key={index}
                className="shadow-md hover:shadow-xl block rounded-xl p-4 col-span-2 md:col-span-1"
              >
                {/* <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span> */}

                <h2 className="my-3 font-bold">{item.title}</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
