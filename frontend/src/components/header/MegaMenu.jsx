import React from "react";

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
            <div className="mega_menu_item hover1">
              <img src="../../left/campus.png" alt="Campus" />
              <div className="mega_menu_col">
                <span>Campus</span>
                <span>
                  A unique, exclusive space for college students on Facebook
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
