import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/loginInput";
import "../../pages/login/Login.css";

const loginInfos = {
  email: "",
  password: "",
};

function LoginForm({ setVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div>
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
            <button className="green_btn open_signup" onClick={setVisible}>
              Create Account
            </button>
          </div>
          <Link to="/" className="sign_extra">
            <b>Create a Page </b>
            for a celebrity, brand or business
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
