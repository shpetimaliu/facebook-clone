import { useField } from "formik";
import React from "react";
import "./index.css";

function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="input_wrap">
      <input placeholder={placeholder} {...field} {...props} />
    </div>
  );
}

export default LoginInput;
