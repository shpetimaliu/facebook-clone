import React, { useState } from "react";
import Footer from "../../components/loginForm/Footer";
import LoginForm from "../../components/loginForm/LoginForm";
import RegisterForm from "../../components/loginForm/RegisterForm";
import "./Login.css";

function Login() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm setVisible={setVisible} />
        {visible && <RegisterForm setVisible={setVisible} />}
        <Footer />
      </div>
    </div>
  );
}

export default Login;
