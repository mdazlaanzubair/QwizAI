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
  // checking if user is logged in or otherwise
  const { currentUser } = useUserAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* open routes without protection */}
        <Route path="/" element={<Home />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/login" element={<Signin />} exact />
        {/* <Route
          path="/dashboard"
          element={<ProtectedRoute Component={<Dashboard />} />}
          exact
        /> */}

        {/* restricted routes under protection */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute currentUser={currentUser}>
              <Dashboard />
            </ProtectedRoute>
          }
          exact
        >
          <Route
            path="qna"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Ques_Ans />
              </ProtectedRoute>
            }
            exact
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
