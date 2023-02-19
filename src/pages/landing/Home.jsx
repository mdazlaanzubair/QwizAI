import cta_img_1 from "../../assets/illustrations/CTA-img-1.png";
import cta_img_2 from "../../assets/illustrations/asset_1.png";
import { content } from "../../utilities/constants/data";

// components import
import Header from "./layout/components/Header";
import Footer from "./layout/components/Footer";
import Hero from "./layout/sections/Hero";
import About from "./layout/sections/About";
import Features from "./layout/sections/Features";
import CallToAction from "./layout/sections/CallToAction";
import Pricing from "./layout/sections/Pricing";
import Why from "./layout/sections/Why";
import Testimonial from "./layout/sections/Testimonial";
import Faq from "./layout/sections/Faq";
import Contact from "./layout/sections/Contact";
import { useEffect } from "react";

const Home = () => {
  // 👇️ scroll to top on page load
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <CallToAction
        CTA_image={cta_img_1}
        title={content.callToAction.para1}
        para={content.callToAction.para2}
        btnText="Login"
      />
      <Why />
      <Testimonial />
      <Faq />
      <CallToAction
        CTA_image={cta_img_2}
        title={content.callToAction.para3}
        para={content.callToAction.para4}
        btnText="Try now"
      />
      <Contact />
      <Footer />
      <button
        className="bg-indigo-600 p-3 rounded-full fixed bottom-3 right-3"
        onClick={() => {
          scrollToTop();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default Home;
