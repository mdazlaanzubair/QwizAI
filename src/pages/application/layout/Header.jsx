import { Link } from "react-router-dom";
import app_logo from "../../../assets/app-logo/logo.png";
import { useUserAuth } from "../../../utilities/context/userAuth";

const Header = () => {
  // grabbing user info
  const { currentUser, logoutUser } = useUserAuth();
  console.log(currentUser);

  return (
    <header
      id="navbar"
      className="navbar mb-2 justify-between shadow-lg w-3/4 lg:w-1/2 mx-auto bg-slate-300 rounded-box pb-3"
    >
      <div className="flex-none px-2 mx-2">
        <a href="/">
          <img className="w-24" src={app_logo} alt="Qwizbot logo" />
        </a>
      </div>
      <div className="flex-none px-2 mx-2 items-center">
        <div className="flex space-x-5 justify-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              className="flex p-3 cursor-pointer border-0 active:border-0 active:outline-none items-center rounded-full hover:text-indigo-600 text-black transition-all ease-in-out duration-500"
            >
              <div className="avatar mr-3">
                <div className="rounded-full w-8 h-8">
                  <img src={currentUser.photoURL} />
                </div>
              </div>
              <p className="text-sm">{currentUser.displayName}</p>
            </div>
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard/qna">Question/Answers</Link>
              </li>
              <li>
                <Link to="/" onClick={() => logoutUser()}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
