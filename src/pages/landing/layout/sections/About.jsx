import { content } from "../../../../utilities/constants/data";
import about_img from "../../../../assets/illustrations/about-img.png";

const About = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full shadow-2xl">
            <img
              alt="Party"
              src={about_img}
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div class="lg:py-24">
            <h2 class="text-3xl font-bold sm:text-4xl">What is Qwizbot?</h2>

            <p class="mt-4 text-gray-600">{content.about.para1}</p>

            <a href="#features" className="text-indigo-600 inline-block mt-3">
              <span class="text-sm font-medium">Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
