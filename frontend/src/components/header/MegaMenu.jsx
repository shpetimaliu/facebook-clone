import React from "react";
import { create, menu } from "../../data/MegaMenu";
import MegaMenuList from "./MegaMenuList";

function MegaMenu() {
  return (
    <div className="mega_menu">
      <div className="mega_menu_header">Menu</div>
      <div className="mega_menu_wrap scrollbar">
        <div className="all_left">
          <div className="mega_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Search Menu" />
          </div>
          <div className="mega_menu_group">
            <div className="mega_menu_group_header">Social</div>
            {menu.slice(0, 6).map((item, i) => (
              <MegaMenuList
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="mega_menu_group">
            <div className="mega_menu_group_header">Entertainment</div>
            {menu.slice(6, 9).map((item, i) => (
              <MegaMenuList
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="mega_menu_group">
            <div className="mega_menu_group_header">Shopping</div>
            {menu.slice(9, 11).map((item, i) => (
              <MegaMenuList
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="mega_menu_group">
            <div className="mega_menu_group_header">Personal</div>
            {menu.slice(11, 15).map((item, i) => (
              <MegaMenuList
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>{" "}
          <div className="mega_menu_group">
            <div className="mega_menu_group_header">Professional</div>
            {menu.slice(15, 17).map((item, i) => (
              <MegaMenuList
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="mega_menu_group">
            <div className="mega_menu_group_header">Community Resources</div>
            {menu.slice(17, 19).map((item, i) => (
              <MegaMenuList
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="all_right">
          <div className="all_right_header">Create</div>
          {create.map((item, i) => (
            <div className="all_right_item hover1" key={i}>
              <div className="all_right_circle hover">
                <i className={item.icon}></i>
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
