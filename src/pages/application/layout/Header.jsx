import { Link } from "react-router-dom";
import app_logo from "../../../assets/app-logo/logo.png";

const Header = () => {
  return (
    <header
      id="navbar"
      className="navbar mb-2 justify-between shadow-lg w-3/4 lg:w-1/2 mx-auto bg-slate-300 rounded-box pb-3"
    >
      <div className="flex-none px-2 mx-2">
        <a href="/">
          <img className="w-36" src={app_logo} alt="Qwizbot logo" />
        </a>
      </div>
      <div className="flex-none px-2 mx-2 items-center">
        <div className="flex space-x-5 justify-end">
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
              <li>
                <Link to="/dashboard/qna">Question/Answers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
