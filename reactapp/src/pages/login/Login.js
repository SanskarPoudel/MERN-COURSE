import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
  const { error } = useContext(AuthContext);
  const { attemptLogin } = useContext(AuthContext);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    const userName = event.target.value;
    setUsername((_) => {
      return userName;
    });
  };

  const handlePassword = (event) => {
    const userPassword = event.target.value;
    setPassword((_) => {
      return userPassword;
    });
  };

  const handleLogIn = () => {
    attemptLogin(username, password);
  };

  return (
    <div className="container w-50 my-5">
      <div className="alert alert-primary">
        <h2>Log In to see the projects</h2>
      </div>
      <div className="form-group py-2">
        {error && (
          <div class="alert alert-warning" role="alert">
            Invalid Username / Password. Re-Enter or Click
            <Link to="/register"> here </Link>to register.
          </div>
        )}
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Username"
          onChange={handleUsername}
          value={username}
        />
      </div>

      <div className="form-group py-2">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </div>

      <button className="btn btn-primary my-2" onClick={handleLogIn}>
        Log In
      </button>
    </div>
  );
}
