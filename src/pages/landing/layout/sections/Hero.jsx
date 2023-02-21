import AnchorLink from "react-anchor-link-smooth-scroll";
import hero_bg_img from "../../../../assets/illustrations/hero-img.png";
import { content } from "../../../../utilities/constants/data";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
      ></div>
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="font-bold text-xl md:text-4xl lg:text-3xl xl:text-4xl">
            {content.hero.title}
          </h1>
          <p className="my-4">{content.hero.para1}</p>
          <p className="my-4">
            {content.hero.para2}
            <strong className="text-primary">Qwizbot!</strong>
          </p>
          <a
            href="/"
            className="mt-8 mr-3 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            <span className="text-sm font-medium"> Get Started </span>

            <svg
              className="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <AnchorLink
            href="#about"
            className="mt-8 inline-flex items-center rounded border border-indigo-600 text-indigo-600 px-8 py-3 bg-white hover:bg-indigo-600 hover:text-white active:border-0"
          >
            <span className="text-sm font-medium"> Explore </span>
          </AnchorLink>
        </div>
        <div className="relative overflow-hidden w-full lg:w-7/12 lg:-mr-16 hidden lg:block">
          <img
            className="mx-auto mix-blend-multiply my-5"
            src={hero_bg_img}
            alt="project illustration"
            height=""
            width=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
