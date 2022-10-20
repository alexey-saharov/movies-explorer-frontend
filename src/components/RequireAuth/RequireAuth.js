import { Navigate } from "react-router-dom";

export default function RequireAuth({ loggedIn, children, redirectTo }) {
  return loggedIn ? children : <Navigate to={redirectTo} />;
}
