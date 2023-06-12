import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ loggedIn, children, redirectTo }) {
  const location = useLocation();
  return loggedIn ? children : <Navigate to={redirectTo} replace state={{ path: location.pathname }} />;
}
