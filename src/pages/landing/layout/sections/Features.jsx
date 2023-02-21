import { content } from "../../../../utilities/constants/data";
import features_bg from "../../../../assets/illustrations/feature-section-bg.jpg";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-gray-900 text-white"
      style={{ background: `url(${features_bg})`, backgroundSize: "cover" }}
    >
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes <span className="text-indigo-600">Qwizbot</span> special
          </h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {content.features.map((feature, index) => (
            <div
              className="flex items-start transform ease-out duration-500 bg-gradient-to-r from-[#0b0133] to-[#000525] hover:shadow-2xl shadow p-5 rounded-lg border-none"
              key={index}
            >
              <span className="flex-shrink-0 rounded-lg bg-indigo-800 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={feature.icon}
                  />
                </svg>
              </span>

              <div className="ml-4">
                <h2 className="text-lg font-bold">{feature.title}</h2>

                <p className="mt-1 text-sm text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Features;
