import React from "react";
import { Navigate } from "react-router-dom";

export function RequireAuth({ loggedIn, children, redirectTo }) {
  return loggedIn ? children : <Navigate to={redirectTo} />;
}
