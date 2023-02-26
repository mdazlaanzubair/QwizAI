import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import fbAuthErrors from "../constants/firebaseAuthErrors";

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

    // toaster alert
    toast.success("You account has been successfully created!", {
      position: "top-right",
    });
    return user;
  } catch (error) {
    // toaster alert
    toast.error(fbAuthErrors[error.code], {
      position: "bottom-center",
    });

    // logging out errors if any
    console.log(error);
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

    // toaster alert
    toast.success("You successfully logged in!", {
      position: "top-right",
    });
    return user;
  } catch (error) {
    // toaster alert
    toast.error(fbAuthErrors[error.code], {
      position: "bottom-center",
    });
    // logging out errors if any
    console.log(error);
    return;
  }
};

// LOGOUT USER FUNCTION
export const logoutUser = async () => {
  // try-catch block to catch error if any
  try {
    await signOut(firebaseAuth);
    // toaster alert
    toast.success("You successfully logged out!", {
      position: "top-right",
    });

    return;
  } catch (error) {
    // toaster alert
    toast.error(fbAuthErrors[error.code], {
      position: "bottom-center",
    });

    // logging out errors if any
    console.log(error);
    return;
  }
};
