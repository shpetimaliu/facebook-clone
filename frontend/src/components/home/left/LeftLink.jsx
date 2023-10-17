import React from "react";

function LeftLink({ img, text, notify }) {
  return (
    <div className="leftLink hover1">
      <img src={`../../../left/${img}.png`} alt="" />
      {notify !== undefined ? (
        <div className="col">
          <div className="col_1">{text}</div>
          <div className="col_2">{notify}</div>
        </div>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

export default LeftLink;
