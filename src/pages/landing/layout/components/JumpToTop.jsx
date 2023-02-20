import { useRef } from "react";

const JumpToTop = () => {
  const jumpToTopBtn = useRef();

  // 👇️ scroll to top on page load
  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <button
      ref={jumpToTopBtn}
      className="bg-indigo-800 p-3 rounded-full fixed bottom-3 right-3"
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
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default JumpToTop;
