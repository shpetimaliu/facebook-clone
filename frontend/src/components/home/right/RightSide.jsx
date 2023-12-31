import React from "react";
import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";
import "./RightSide.css";

function RightSide({ user }) {
  const color = "#65676b";
  return (
    <div className="rightSide">
      <div className="heading">Sponsored</div>
      <div className="splitter1"></div>
      <div className="contacts_Wrap">
        <div className="contacts_header">
          <div className="contacts_header_left">Contacts</div>
          <div className="contacts_header_right">
            <div className="contact_circle hover1">
              <NewRoom color={color} />
            </div>
            <div className="contact_circle hover1">
              <Search color={color} />
            </div>
            <div className="contact_circle hover1">
              <Dots color={color} />
            </div>
          </div>
        </div>
        <div className="contact_list">
          <Contact user={user} />
        </div>
      </div>
    </div>
  );
}

export default RightSide;
