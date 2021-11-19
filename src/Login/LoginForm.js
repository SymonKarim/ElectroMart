import React from "react";
import "./LoginForm.css";
import { Container } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Input from "../shared/Input/Input";

import useAuth from "../Hooks/useAuth";

const LoginForm = () => {
  const location = useLocation();
  const history = useNavigate();
  const {
    signInusingEmailPassword,
    setEmail,
    setPassword,
    error,
    user,
    
  } = useAuth();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handledefault = (e) => {
    e.preventDefault();
  };
  const handlelogin = (e) => {
    signInusingEmailPassword(location, history);
  }

  return (
    <>
      <Container>
        <div className="loginFormMainDiv">
          <div className="loginFormDiv">
            <h2 className="loginForm__title">Login Form</h2>
            <form onSubmit={handledefault} className="loginForm">
              <Input
                onBlur={handleEmail}
                isFloatingLabelInput={true}
                label="Enter Email"
                name="username"
                value=""
                type="text"
                placeholder="Enter your username"
                required
              />
              <Input
                onBlur={handlePassword}
                isFloatingLabelInput={true}
                label="Enter your password"
                name="password"
                value=""
                type="password"
                placeholder="Enter your password"
                required
              />
              <small className="m-2 text-danger">{error}</small>
              <div className="mb-1">
                {user.email && <Navigate to="/"></Navigate>}
                <button
                  className="btn btn-primary fs-5 w-100 bold "
                  onClick={handlelogin}
                >
                  Login
                </button>
              </div>
          

              <div className="text-center">
                <p>
                  Haven't Account? <Link to="/registration" className="fw-bold text-danger">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;
