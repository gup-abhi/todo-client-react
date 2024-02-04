import { Navigate, Route } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";

const PrivateRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("username") ? true : false
  );

  useEffect(() => {
    const checkLoginStatus = () => {
      setLoggedIn(sessionStorage.getItem("username") ? true : false);
    };

    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  return loggedIn ? <Home /> : <Navigate to="/signin" replace />;
};

export default PrivateRoutes;
