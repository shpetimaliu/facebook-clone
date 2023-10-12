import React from "react";
import { useMediaQuery } from "react-responsive";

function DateOfBirthSelect({
  ditlindjaDita,
  ditlindjaMuaji,
  ditlindjaViti,
  handleRegisterChange,
  muaji,
  dita,
  viti,
  dateError,
}) {
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
      style={{ marginBottom: `${dateError && !view3 ? "90px" : "0"}` }}
    >
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
      {dateError && (
        <div
          className={
            !view3 ? "input_error" : "input_error input_error_select_large"
          }
        >
          <div
            className={!view3 ? "error_arrow_bottom" : "error_arrow_left"}
          ></div>
          {dateError}
        </div>
      )}
    </div>
  );
}

export default DateOfBirthSelect;
