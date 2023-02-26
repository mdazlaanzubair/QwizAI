import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import app_logo from "../../../assets/app-logo/logo.png";
import { useUserAuth } from "../../../utilities/context/userAuth";

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

  // getting status of logged in user and logout function
  const { currentUser, logoutUser } = useUserAuth();

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
              className="p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52"
            >
              {/* routes to react component */}
              {/* route for authenticated user */}
              {currentUser ? (
                <>
                  <li>
                    <Link to="/">{currentUser.displayName}</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/analytics">Go to Dashboard</Link>
                  </li>
                </>
              ) : (
                ""
              )}

              {/* general in-page routes */}
              {/* routes for both authenticated and unauthenticated user */}
              {sections_routes.map((route, index) => (
                <li key={index}>
                  <AnchorLink href={route.id}>{route.title}</AnchorLink>
                </li>
              ))}

              {/* routes to react component */}
              {/* route for unauthenticated user i.e. guest/visitor */}
              {!currentUser ? (
                <Link
                  to="/login"
                  className="mx-2 mb-2 w-auto text-center py-3 px-4 border-b-2 rounded font-bold uppercase text-xs border-transparent transition-all ease-in-out duration-500 bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              ) : (
                ""
              )}

              {/* routes to react component */}
              {/* route for authenticated user */}
              {currentUser ? (
                <li>
                  <Link to="/" onClick={() => logoutUser()}>
                    Logout
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>

        {/* desktop navbar */}
        <div className="items-center hidden lg:flex space-x-5">
          {/* general in-page routes */}
          {sections_routes.map((route, index) => (
            <AnchorLink
              key={index}
              href={route.id}
              className="p-1 border-b-2 font-bold uppercase text-xs border-transparent transition-all ease-in-out duration-500 hover:text-indigo-700 hover:border-b-indigo-600"
            >
              {route.title}
            </AnchorLink>
          ))}
          {/* routes to react component */}
          {currentUser ? (
            // route for authenticated user
            <div className="dropdown dropdown-end dropdown-hover">
              <div
                tabIndex="0"
                className="p-1 border-b-2 font-bold uppercase text-xs border-transparent transition-all ease-in-out duration-500 hover:text-indigo-700"
              >
                Profile
              </div>
              <ul
                tabIndex="0"
                className="p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52"
              >
                <li className="text-sm">
                  <Link to="/">{currentUser.displayName}</Link>
                </li>
                <li className="text-sm">
                  <Link to="/dashboard/analytics">Go to Dashboard</Link>
                </li>
                <li className="text-sm">
                  <Link to="/" onClick={() => logoutUser()}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            // route for unauthenticated user i.e. guest/visitor
            <Link
              to="/login"
              className="ml-5 py-3 px-4 border-b-2 rounded font-bold uppercase text-xs border-transparent transition-all ease-in-out duration-500 bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
