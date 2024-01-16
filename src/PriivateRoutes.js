import { Navigate } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";

const PrivateRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("username") ? true : false
  );

  return loggedIn ? <Home /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
