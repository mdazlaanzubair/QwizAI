import { useRef } from "react";
import { Link } from "react-router-dom";
import app_logo from "../../assets/app-logo/logo.png";
import { registerUser } from "../../utilities/helpers/authenticator";
import { firebaseAuth } from "../../utilities/helpers/firebaseConfig";

const Signup = () => {
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const pwd = useRef();

  // form submission button
  const handelForm = async (event) => {
    event.preventDefault();

    // registering using authenticator
    try {
      const user = await registerUser(
        firebaseAuth,
        email.current.value,
        pwd.current.value
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="signup" className="min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-15">
        <div className="w-full rounded-lg shadow-2xl dark:border md:mt-0 max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="mb-5">
              <Link to="/" className="flex items-center text-2xl font-semibold">
                <img
                  className="mx-auto"
                  width="150"
                  src={app_logo}
                  alt="logo"
                />
              </Link>

              <p className="mt-3 text-center">
                Register yourself for productivity.
              </p>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={handelForm}>
              <div className="flex flex-row w-full justify-between">
                <div>
                  <label
                    htmlFor="fname"
                    className="block mb-2 text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    ref={fname}
                    type="text"
                    id="fname"
                    className="sm:text-sm rounded-lg border-2 active:border-indigo-600 focus:border-indigo-600 focus:outline-none w-full p-2.5"
                    placeholder="John"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="block mb-2 text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    ref={lname}
                    type="text"
                    id="lname"
                    className="sm:text-sm rounded-lg border-2 active:border-indigo-600 focus:border-indigo-600 focus:outline-none w-full p-2.5"
                    placeholder="Doe"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  ref={email}
                  type="email"
                  id="email"
                  className="sm:text-sm rounded-lg border-2 active:border-indigo-600 focus:border-indigo-600 focus:outline-none w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  ref={pwd}
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="sm:text-sm rounded-lg border-2 active:border-indigo-600 focus:border-indigo-600 focus:outline-none w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-indigo-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 active:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-light">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
