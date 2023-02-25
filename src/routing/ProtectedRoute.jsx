import { Navigate } from "react-router-dom";

// here "children" is the element being passed in "ProtectedRoute"
const ProtectedRoute = ({ currentUser, children }) => {
  return currentUser ? children : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
