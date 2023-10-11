import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" alt="logo" />
            <span>
              Facebook helps you connect and share with the people of your life
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik>
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      placeholder="Email or phone number"
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <button type="submit" className="blue_btn">
                      Log in
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forget" className="forget_password">
                Forgot password?
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a Page </b>
              for a celebrity, brand or business
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
}

export default Login;
