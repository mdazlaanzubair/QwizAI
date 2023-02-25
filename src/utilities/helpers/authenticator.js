import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// importing auth from firebase config in order to pass
// in the firebase authentication functions
import { firebaseAuth } from "./firebaseConfig";

// REGISTER USER FUNCTION
export const registerUser = async (email, password) => {
  // try-catch block to catch error if any
  try {
    const user = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return user;
  } catch (error) {
    // logging out errors if any
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.message);
    return;
  }
};

// LOGIN USER FUNCTION
export const loginUser = async (email, password) => {
  // try-catch block to catch error if any
  try {
    const user = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return user;
  } catch (error) {
    // logging out errors if any
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.message);
    return;
  }
};

// LOGOUT USER FUNCTION
export const logoutUser = async () => {
  console.log("Logout User");

  // try-catch block to catch error if any
  try {
    await signOut(firebaseAuth);
    return "Sign-out successfully.";
  } catch (error) {
    // logging out errors if any
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.message);
    return;
  }
};
