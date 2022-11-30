import React, { Children, createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const attemptLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      navigate("/todo");
    } else {
      setError(true);
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, error, attemptLogin, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
