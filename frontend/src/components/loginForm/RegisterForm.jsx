import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import useDispatch from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as Yup from "yup";
import RegisterInput from "../inputs/registerInput/registerInput";
import DateOfBirthSelect from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";

function RegisterForm() {
  const userInfos = {
    emri: "",
    mbiemri: "",
    email: "",
    password: "",
    ditlindjaViti: new Date().getFullYear(),
    ditlindjaMuaji: new Date().getMonth() + 1,
    ditlindjaDita: new Date().getDate(),
    gender: "",
  };

  const [user, setUser] = useState(userInfos);
  const {
    emri,
    mbiemri,
    email,
    password,
    ditlindjaViti,
    ditlindjaMuaji,
    ditlindjaDita,
    gender,
  } = user;
  const vitiTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const viti = Array.from(new Array(110), (val, index) => vitiTemp - index);
  const muaji = Array.from(new Array(12), (val, index) => index + 1);
  const NxjerrDiten = () => {
    return new Date(ditlindjaViti, ditlindjaMuaji, 0).getDate();
  };
  const dita = Array.from(new Array(NxjerrDiten()), (val, index) => index + 1);

  const registerValidation = Yup.object({
    emri: Yup.string()
      .matches(/^[A-Za-z]+$/, "First name can only contain letters")
      .required("First name is required")
      .min(2, "First name must be between 2 and 20 characters")
      .max(20, "First name must be between 2 and 20 characters"),
    mbiemri: Yup.string()
      .matches(/^[A-Za-z]+$/, "Surname can only contain letters")
      .required("Surname is required")
      .min(2, "Surname must be between 2 and 20 characters")
      .max(20, "Surname must be between 2 and 20 characters"),
    email: Yup.string()
      .required("Email is a required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required(
        "Enter a combination of at least eight number, letters and punctuation marks(Such as ! and &)"
      )
      .min(8, "Password must be at least 8 characters.")
      .max(50, "Password can't be more than 50 characters."),
  });

  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const registerSubmit = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          emri,
          mbiemri,
          email,
          password,
          ditlindjaViti,
          ditlindjaMuaji,
          ditlindjaDita,
          gender,
        }
      );
      setError("");
      setSuccess(data.message);
      const { message, ...rest } = data;
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: rest });
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon"></i>
          <span>Sign Up</span>
          <span>It's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            emri,
            mbiemri,
            email,
            password,
            ditlindjaViti,
            ditlindjaMuaji,
            ditlindjaDita,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            let current_date = new Date();
            let picked_date = new Date(
              ditlindjaViti,
              ditlindjaMuaji,
              ditlindjaDita
            );
            let atLeast14 = new Date(1970 + 14, 0, 1);
            let noMoreThan70 = new Date(1970 + 70, 0, 1);
            if (current_date - picked_date < atLeast14) {
              setDateError(
                "It look like you've enetered the wrong info. Please make sure that you use real date of birth."
              );
            } else if (current_date - picked_date > noMoreThan70) {
              setDateError(
                "It look like you've enetered the wrong info. Please make sure that you use real date of birth."
              );
            } else if (gender === "") {
              setGenderError(
                "Please choose a gender. You can change who can see this leter."
              );
            } else {
              setDateError("");
              setGenderError("");
              registerSubmit();
            }
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="First Name"
                  name="emri"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Surname"
                  name="mbiemri"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Email or phone number"
                  name="email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <DateOfBirthSelect
                  ditlindjaDita={ditlindjaDita}
                  ditlindjaMuaji={ditlindjaMuaji}
                  ditlindjaViti={ditlindjaViti}
                  dita={dita}
                  muaji={muaji}
                  viti={viti}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>
                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderError={genderError}
                />
              </div>
              <div className="reg_infos">
                By clicking Sign up, you agree to our{" "}
                <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS
                notifications from us and can opt out at any time.
              </div>
              <div className="reg_btn_wrapper">
                <button className="green_btn open_signup">Sign Up </button>
              </div>
              <ScaleLoader color="#7A7D82" loading={loading} size={50} />
              {error && <div className="error_text">{error}</div>}
              {success && <div className="success_text">{success}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterForm;
