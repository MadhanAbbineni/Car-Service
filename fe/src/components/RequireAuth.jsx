import { Navigate } from "react-router-dom";
import auth from "../auth";

const RequireAuth = ({ children }) => {
  return auth.isAuthenticated() ? children : <Navigate replace to="/login" />;
};

export default RequireAuth;
