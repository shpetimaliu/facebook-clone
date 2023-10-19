import React, { useState } from "react";
import { Link } from "react-router-dom";
import DisplayAccessibility from "./DisplayAccessibility";
import HelpSupport from "./HelpSupport";
import SettingPrivacy from "./SettingPrivacy";

function UserMenu({ user }) {
  const [visible, setVisible] = useState(0);

  return (
    <div className="userMenu">
      {visible === 0 && (
        <div>
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
          <div
            className="userMenu_item hover3"
            onClick={() => {
              setVisible(1);
            }}
          >
            <div className="small_circle">
              <i className="settings_filled_icon"></i>
            </div>
            <span>Settings & Privacy</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div
            className="userMenu_item hover3"
            onClick={() => {
              setVisible(2);
            }}
          >
            <div className="small_circle">
              <i className="help_filled_icon"></i>
            </div>
            <span>Help & Support</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div
            className="userMenu_item hover3"
            onClick={() => {
              setVisible(3);
            }}
          >
            <div className="small_circle">
              <i className="dark_filled_icon"></i>
            </div>
            <span>Display & Accessibility</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="userMenu_item hover3">
            <div className="small_circle">
              <i className="logout_filled_icon"></i>
            </div>
            <span>Logout</span>
          </div>
        </div>
      )}
      {visible === 1 && <SettingPrivacy setVisible={setVisible} />}
      {visible === 2 && <HelpSupport setVisible={setVisible} />}
      {visible === 3 && <DisplayAccessibility setVisible={setVisible} />}
    </div>
  );
}

export default UserMenu;
