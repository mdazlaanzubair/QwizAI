import contact_img from "../../../../assets/illustrations/contact-img.png";

const Contact = () => {
  return (
    <section id="contact" className="body-font relative">
      <div className="container py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 rounded-lg overflow-hidden sm:mr-10 items-start justify-start relative hidden lg:flex">
          <img src={contact_img} alt="contact-img" />
        </div>
        <div className="lg:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0 px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Contact</h2>
          <p className="leading-relaxed my-5">
            Have any questions or feedback for the Qwizbot team? We'd love to
            back to you as soon as possible. hear from you. Drop us a line at{" "}
            <a
              href="mailto:mdazlaan1996@gmail.com"
              className="font-bold text-primary"
            >
              Qwizbot Support
            </a>
            , and we'll get
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border-gray-300 focus:border-indigo-500 border-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border-gray-300 focus:border-indigo-500 border-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border-gray-300 focus:border-indigo-500 border-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
