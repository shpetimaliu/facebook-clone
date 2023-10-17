import React from "react";

function Shortcut({ img, link, name }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="shortcut_item hover1"
    >
      <img src={img} alt="img" />
      <span>{name}</span>
    </a>
  );
}

export default Shortcut;
