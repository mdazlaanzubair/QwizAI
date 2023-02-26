import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserAuthContextProvider from "./utilities/context/userAuth";

// toaster css
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AuthContext wrapper */}
    <UserAuthContextProvider>
      <App />

      {/* toastify blank container to display toasts */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserAuthContextProvider>
  </React.StrictMode>
);
