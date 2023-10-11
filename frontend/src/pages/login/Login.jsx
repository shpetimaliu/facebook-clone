import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/loginInput";
import "./Login.css";

const loginInfos = {
  email: "",
  password: "",
};

function Login() {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  console.log(login);
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email or phone number is required")
      .email("Must be a valid email")
      .max(100),
    password: Yup.string().required("Password is required"),
  });

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
              <Formik
                enableReinitialize
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      placeholder="Email or phone number"
                      onChange={handleLoginChange}
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleLoginChange}
                      bottom
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
              <button className="green_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a Page </b>
              for a celebrity, brand or business
            </Link>
          </div>
        </div>
        <div className="register"></div>
        <footer className="login_footer">
          <div className="login_footer_wrap">
            <Link to="/">English (US)</Link>
            <Link to="/">Shqip</Link>
            <Link to="/">Deutsch</Link>
            <Link to="/">Türkçe</Link>
            <Link to="/">Français (France)</Link>
            <Link to="/">Italiano</Link>
            <Link to="/">Bosanski</Link>
            <Link to="/">Svenska</Link>
            <Link to="/">Español</Link>
            <Link to="/">Português (Brasil)</Link>
            <Link to="/">日本語</Link>
            <Link to="/" className="footer_square">
              <i className="plus_icon"></i>
            </Link>
          </div>
          <div className="footer_splitter"></div>
          <div className="login_footer_wrap">
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Messenger</Link>
            <Link to="/">Facebook Lite</Link>
            <Link to="/">Video</Link>
            <Link to="/">Places</Link>
            <Link to="/">Games</Link>
            <Link to="/">Marketplace</Link>
            <Link to="/">Meta Pay</Link>
            <Link to="/">Meta Store</Link>
            <Link to="/">Meta Quest</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Threads</Link>
            <Link to="/">Fundraisers</Link>
            <Link to="/">Services</Link>
            <Link to="/">Voting Information Center</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Privacy Center</Link>
            <Link to="/">Groups</Link>
            <Link to="/">About</Link>
            <Link to="/">Create ad</Link>
            <Link to="/">Create Page</Link>
            <Link to="/">Developers</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">
              Ad choices<i className="adChoices_icon"></i>
            </Link>
            <Link to="/">Terms</Link>
            <Link to="/">Help</Link>
            <Link to="/">
              Contact Uploading & Non-UsersSettingsActivity log
            </Link>
          </div>
          <div className="login_footer_wrap">
            <Link to="/" style={{ fontSize: "12px", marginTop: "10px" }}>
              Meta Clone © 2023
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Login;
