import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserAuthContextProvider from "./utilities/context/auth/AuthContext";

// toaster css
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppContextProvider from "./utilities/context/app/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AppContext wrapper */}
    <AppContextProvider>
      {/* AuthContext wrapper */}
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </AppContextProvider>

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
  </React.StrictMode>
);
