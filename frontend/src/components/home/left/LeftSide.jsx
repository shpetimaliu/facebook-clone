import React from "react";
import { left } from "../../../data/home";
import LeftLink from "./LeftLink";
import "./LeftSide.css";

function LeftSide({ user }) {
  return (
    <div className="leftSide">
      <div className="leftLink">
        <img src={user?.profili} alt="" />
        <span>
          {user?.emri} {user?.mbiemri}
        </span>
      </div>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notify={link.notification}
        />
      ))}
    </div>
  );
}

export default LeftSide;
