import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import RegisterInput from "../inputs/registerInput/registerInput";

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
            console.log(picked_date);
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
                <div className="reg_grid">
                  <select
                    name="ditlindjaDita"
                    value={ditlindjaDita}
                    onChange={handleRegisterChange}
                  >
                    {dita.map((dit, i) => (
                      <option value={dit} key={i}>
                        {dit}
                      </option>
                    ))}
                  </select>
                  <select
                    name="ditlindjaMuaji"
                    value={ditlindjaMuaji}
                    onChange={handleRegisterChange}
                  >
                    {muaji.map((muaj, i) => (
                      <option value={muaj} key={i}>
                        {muaj}
                      </option>
                    ))}
                  </select>
                  <select
                    name="ditlindjaViti"
                    value={ditlindjaViti}
                    onChange={handleRegisterChange}
                  >
                    {viti.map((year, i) => (
                      <option value={year} key={i}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="female">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="other">
                    Other
                    <input
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
              </div>
              <div className="reg_infos">
                By clicking Sign up, you agree to our{" "}
                <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS
                notifications from us and can opt out at any time.
              </div>
              <div className="reg_btn_wrapper">
                <button className="green_btn open_signup">Sign Up</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterForm;
