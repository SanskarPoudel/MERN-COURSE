import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, error, logOut } = useContext(AuthContext);
  return (
    <div>
      <nav className=" container navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/">
          MERN COURSE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {!isLoggedIn && (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    Login Form
                  </Link>
                </li>
              </>
            )}
            {}

            {isLoggedIn && (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="todo">
                    Todo App
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="counter">
                    Counter
                  </Link>
                </li>
                <button className="btn btn-warning" onClick={logOut}>
                  Log Out
                </button>
              </>
            )}
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
