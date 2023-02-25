import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserAuthContextProvider from "./utilities/context/userAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AuthContext wrapper */}
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </React.StrictMode>
);
