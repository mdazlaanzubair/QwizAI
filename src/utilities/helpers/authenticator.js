import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// REGISTER USER FUNCTION
export const registerUser = async (auth, email, password) => {
  // try-catch block to catch error if any
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    // logging out errors if any
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.error);
    return;
  }
};

// LOGIN USER FUNCTION
export const loginUser = async (auth, email, password) => {
  // try-catch block to catch error if any
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    // logging out errors if any
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.error);
    return;
  }
};

// LOGOUT USER FUNCTION
export const logoutUser = async (auth) => {
  // try-catch block to catch error if any
  try {
    await signOut(auth);
    return "Sign-out successfully.";
  } catch (error) {
    // logging out errors if any
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.error);
    return;
  }
};
