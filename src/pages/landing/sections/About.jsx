import { content } from "../../../utilities/constants/data";
import about_img from "../../../assets/illustrations/about-img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full shadow-2xl hidden lg:block">
            <img
              alt="Party"
              src={about_img}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What is <strong className="text-primary">Qwizbot</strong>?
            </h2>

            <p className="mt-4 text-gray-600">{content.about.para1}</p>

            <AnchorLink
              href="#features"
              className="text-indigo-600 inline-block mt-3"
            >
              <span className="text-sm font-medium">Learn more</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
