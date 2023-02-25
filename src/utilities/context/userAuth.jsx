import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, logoutUser, registerUser } from "../helpers/authenticator";
import { firebaseAuth } from "../helpers/firebaseConfig";
// import { firebaseAuth } from "../helpers/firebaseConfig";

// initializing context for application to deal with the user authentication
const UserAuthContext = createContext(null);

// creating custom hook to consume "useContext" functionality
// and return the "userAuthContext"
export const useUserAuth = () => useContext(UserAuthContext);

// context provider that provides all the value/states of
// "userAuthContext" to all of its nested components i.e. "children"
export default function UserAuthContextProvider({ children }) {
  // creating states to be passed in "userAuthContext" as values
  // this state contains the value of currently logged in user
  // by default the value is "null" which represents that the
  // current user is guest or visitor, mean unauthenticated
  const [currentUser, setCurrentUser] = useState(null);

  // performing authentication check using firebase "onAuthStateChanged" function
  // this function did not clean itself after component unmounted therefore an additional
  // function "unsubscribe" shall be run in order to clean up this function execution
  // since this authentication check shall be performed on every component mount and unmount
  // therefore using "userEffect"
  useEffect(() => {
    // holding unsubscribe function and setting the current user value in state after
    // receiving from "onAuthStateChanged" firebase function
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // this value object contains all the states or functions to be by the nested children
  // storing "utility" helper functions in context state to perform firebase authentication
  const value = { currentUser, registerUser, loginUser, logoutUser };

  // returning "AuthContext.Provider" with all of it's values and children
  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
}
