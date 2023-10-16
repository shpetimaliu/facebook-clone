import React from "react";
import { Link } from "react-router-dom";

function UserMenu({ user }) {
  return (
    <div className="userMenu">
      <Link to={"/"} className="userMenu_header hover3">
        <img src={user?.profili} alt="" />
        <div className="userMenu_col">
          <span>
            {user?.emri} {user?.mbiemri}
          </span>
          <span>See your profile</span>
        </div>
      </Link>

      <div className="userMenu_splitter"></div>
      <div className="userMenu_main hover3">
        <div className="small_circle">
          <i className="report_filled_icon"></i>
        </div>
        <div className="userMenu_col2">
          <div className="userMenu_span1">Give Feedback</div>
          <div className="userMenu_span2">Help us improve facebook</div>
        </div>
      </div>
      <div className="userMenu_splitter"></div>
      <div className="userMenu_item hover3">
        <div className="small_circle">
          <i className="settings_filled_icon"></i>
        </div>
        <span>Settings & Privacy</span>
        <div className="rArrow">
          <i className="right_icon"></i>
        </div>
      </div>
      <div className="userMenu_item hover3">
        <div className="small_circle">
          <i className="settings_filled_icon"></i>
        </div>
        <span>Settings & Privacy</span>
        <div className="rArrow">
          <i className="right_icon"></i>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
