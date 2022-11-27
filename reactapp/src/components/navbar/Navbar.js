import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className=" container navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          MERN COURSE
        </a>
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
            <li className="nav-item active">
              <a className="nav-link" href="todo">
                Todo App
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="register">
                Registration Form
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login">
                Login Form
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="counter">
                Counter
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
