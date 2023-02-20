import { useState } from "react";
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
import JumpToTop from "./layout/components/JumpToTop";

const Home = () => {
  const [showJumpBtn, setShowJumpBtn] = useState(false);

  // 👇️ get page scroll position and at "400px" display "jumpToTopBtn"
  window.addEventListener("scroll", () => {
    window.pageYOffset >= 150 ? setShowJumpBtn(true) : setShowJumpBtn(false);
  });

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

      {/* displays this components only when page scrolls "400px" Y-axis */}
      {showJumpBtn ? <JumpToTop /> : ""}
    </>
  );
};

export default Home;
