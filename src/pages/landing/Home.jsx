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

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <CallToAction />
      <Pricing />
      <Why />
      <Testimonial />
      <CallToAction />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
