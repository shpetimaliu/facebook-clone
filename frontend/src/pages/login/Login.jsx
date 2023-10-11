import React from "react";
import Footer from "../../components/loginForm/Footer";
import LoginForm from "../../components/loginForm/LoginForm";
import "./Login.css";

const loginInfos = {
  email: "",
  password: "",
};

function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <div className="register"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
