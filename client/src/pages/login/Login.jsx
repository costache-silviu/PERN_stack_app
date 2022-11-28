import React from "react";
import "./login.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className="login-main-container">
      <h2 className="login-welcome-text">Welcome to my World</h2>
      <div className="login-input-container">
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
      </div>
      <div className="login-button-container">
        <Button content="Log in" />
      </div>
    </div>
  );
};

export default Login;
