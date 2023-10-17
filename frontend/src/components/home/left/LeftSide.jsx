import React from "react";
import { Link } from "react-router-dom";
import { left } from "../../../data/home";
import LeftLink from "./LeftLink";
import "./LeftSide.css";

function LeftSide({ user }) {
  return (
    <div className="leftSide">
      <Link to="/profile" className="leftLink hover1">
        <img src={user?.profili} alt="" />
        <span>
          {user?.emri} {user?.mbiemri}
        </span>
      </Link>
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
