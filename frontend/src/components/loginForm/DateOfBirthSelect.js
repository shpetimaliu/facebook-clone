import React from "react";

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
  return (
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
      {dateError && (
        <div className="input_error">
          <div className="error_arrow_bottom"></div>
          {dateError}
        </div>
      )}
    </div>
  );
}

export default DateOfBirthSelect;
