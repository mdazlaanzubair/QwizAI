import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import app_logo from "../../../../assets/app-logo/logo.png";

const Header = () => {
  const sections_routes = [
    {
      id: "#home",
      title: "Home",
    },
    {
      id: "#about",
      title: "About",
    },
    // {
    //   id: "#features",
    //   title: "Features",
    // },
    {
      id: "#pricing",
      title: "Pricing",
    },
    // {
    //   id: "#why",
    //   title: "Why Qwizbot",
    // },
    // {
    //   id: "#testimonial",
    //   title: "Testimonial",
    // },
    {
      id: "#faq",
      title: "FAQ",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = document.getElementById("navbar");
      if (window.pageYOffset >= 150) {
        element.classList.add(
          ...["sticky", "top-0", "z-10", "bg-white", "shadow-lg", "py-5"]
        );
      } else {
        element.classList.remove(
          ...["sticky", "top-0", "z-10", "bg-white", "shadow-lg", "py-5"]
        );
      }
    });
  }, []);

  return (
    <header id="navbar" className="navbar mb-2 justify-between">
      <div className="flex-none px-2 mx-2">
        <a href="/">
          <img className="w-36" src={app_logo} alt="Qwizbot logo" />
        </a>
      </div>
      <div className="flex-none px-2 mx-2 items-center">
        {/* mobile navbar */}
        <div className="flex lg:hidden space-x-5 justify-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              className="p-3 rounded-full hover:bg-indigo-600 hover:text-white text-indigo-600 transition-all ease-in-out duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              {sections_routes.map((route, index) => (
                <li key={index}>
                  <AnchorLink href={route.id}>{route.title}</AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* desktop navbar */}
        <div className="items-center hidden lg:flex space-x-5">
          {sections_routes.map((route, index) => (
            <AnchorLink
              key={index}
              href={route.id}
              className="p-1 border-b-2 font-bold uppercase text-xs border-transparent transition-all ease-in-out duration-500 hover:text-indigo-700 hover:border-b-indigo-600"
            >
              {route.title}
            </AnchorLink>
          ))}
        </div>
        <Link
          to="/signup"
          className="ml-5 py-3 px-4 border-b-2 rounded font-bold uppercase text-xs border-transparent transition-all ease-in-out duration-500 bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
