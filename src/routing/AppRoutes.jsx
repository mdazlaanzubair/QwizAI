import { useUserAuth } from "../utilities/context/userAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// application components
import Ques_Ans from "../pages/application/components/Ques_Ans";
import Dashboard from "../pages/application/Dashboard";
import Signup from "../pages/application/Signup";
import Signin from "../pages/application/Signin";

// landing page component
import Home from "../pages/landing/Home";

// protected component
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* open routes without protection */}
        <Route exact path="/" element={<Home />} />

        {/* restricted routes under protection */}
        <Route
          exact
          path="/signup"
          element={
            <ProtectedRoute requestedPath="/signup">
              <Signup />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <ProtectedRoute requestedPath="/login">
              <Signin />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/dashboard"
          element={
            <ProtectedRoute requestedPath="/dashboard">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/qna"
          element={
            <ProtectedRoute requestedPath="/qna">
              <Ques_Ans />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
