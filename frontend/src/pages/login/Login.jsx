import React from "react";
import Footer from "../../components/loginForm/Footer";
import LoginForm from "../../components/loginForm/LoginForm";
import RegisterForm from "../../components/loginForm/RegisterForm";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
