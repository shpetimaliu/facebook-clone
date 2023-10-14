import React from "react";
import { menu } from "../../data/MegaMenu";
import MegaMenuList from "./MegaMenuList";

function MegaMenu() {
  return (
    <div className="mega_menu">
      <div className="mega_menu_header">Mega Menu</div>
      <div className="mega_menu_wrap scrollbar">
        <div className="all_left">
          <div className="mega_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Search Menu" />
          </div>
          <div className="mega_menu_group">
            <div className="mega_menu_group_header">Social</div>
            {menu.map((item, i) => (
              <MegaMenuList
                name={item.name}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
