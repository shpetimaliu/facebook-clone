import React from "react";
import { useMediaQuery } from "react-responsive";

function GenderSelect({ handleRegisterChange, genderError }) {
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });

  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });

  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${genderError && !view3 && "90px"}` }}
    >
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
      {genderError && (
        <div
          className={
            !view3 ? "input_error" : "input_error input_error_select_large"
          }
        >
          <div
            className={!view3 ? "error_arrow_bottom" : "error_arrow_left"}
          ></div>
          {genderError}
        </div>
      )}
    </div>
  );
}

export default GenderSelect;
