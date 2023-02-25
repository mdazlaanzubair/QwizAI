import { useEffect } from "react";
import app_logo from "../../../assets/app-logo/logo.png";
import { curr_year } from "../../../utilities/helpers/dateFormat";

const Footer = () => {
  useEffect(() => {
    curr_year("year");
  }, []);
  return (
    <footer className="rounded-xl bg-gray-100">
      <div className="container m-auto space-y-8 px-6 py-16 text-gray-600 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
          <a href="/">
            <img
              width="100"
              height="42"
              src={app_logo}
              alt="logo"
              className="w-32"
            />
          </a>
          <div className="flex gap-6">
            <a
              href="https://github.com/mdazlaanzubair/"
              target="_blank"
              className="hover:text-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/mdazlaanzubair"
              target="_blank"
              className="hover:text-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mdazlaanzubair/"
              target="_blank"
              className="hover:text-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-between rounded-md bg-gray-200 shadow-md px-4 py-3">
          <span>
            <a href="/" className="hover:text-primary font-bold">
              Qwizbot
            </a>{" "}
            &copy;{" "}
            <span id="year" className="font-bold">
              2022
            </span>
            .
          </span>
          <a href="#" className="font-medium transition">
            All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
