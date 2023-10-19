import React from "react";

function MegaMenuList({ name, description, icon }) {
  return (
    <div className="mega_menu_item hover1">
      <img src={`../../left/${icon}.png`} alt="Campus" />
      <div className="mega_menu_col">
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default MegaMenuList;
