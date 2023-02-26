import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../utilities/context/userAuth";

// here "children" is the element being passed in "ProtectedRoute"
const ProtectedRoute = ({ requestedPath, children }) => {
  // checking if user is logged in or otherwise
  const { currentUser } = useUserAuth();

  // getting user location
  const location = useLocation();

  // performing conditional route protection as follows:
  // 1. if requested routes are "/login" or "/signup"
  //    >> check the authentication status
  //    >> if logged in = redirect to last location or "/dashboard"
  //    >> else proceed the navigation to the requested route i.e. "/login" or "/signup"
  if (requestedPath === "/login" || requestedPath === "/signup") {
    return currentUser ? (
      <Navigate
        to={location.state?.from ?? "/dashboard/analytics"}
        replace={true}
      />
    ) : (
      children
    );
  }

  // 2. if requested routes are not "/login" or "/signup"
  //    >> check the authentication status
  //    >> if not logged in = redirect to authentication route i.e. "/login"
  //    >> and set the location state to the requested path
  //    >> else proceed the navigation to the requested route i.e. "children"
  if (requestedPath !== "/login" || requestedPath !== "/signup") {
    return currentUser ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: requestedPath }} replace={false} />
    );
  }
};

export default ProtectedRoute;
