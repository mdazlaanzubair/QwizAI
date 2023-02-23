import { Link } from "react-router-dom";

const CallToAction = ({ CTA_image, title, para, btnText }) => {
  return (
    <section className="overflow-hidden bg-slate-100 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">{para}</p>

          <div className="mt-4 md:mt-8">
            <Link
              to="/signup"
              className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
      <img
        alt="Student"
        src={CTA_image}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
};

export default CallToAction;
