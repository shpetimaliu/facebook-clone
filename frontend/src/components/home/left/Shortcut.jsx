import React from "react";

function Shortcut({ img, link, name }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="shortcut_item hover3"
    >
      <img src={img} alt="img" />
      <span>{name}</span>
    </a>
  );
}

export default Shortcut;
