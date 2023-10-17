import React, { useState } from "react";
import { Link } from "react-router-dom";
import { left } from "../../../data/home";
import { ArrowDown1 } from "../../../svg";
import LeftLink from "./LeftLink";
import "./LeftSide.css";

function LeftSide({ user }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="leftSide scrollbar">
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

      {!visible && (
        <div
          className="leftLink hover1"
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className="moreLeft">
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink
              key={i}
              img={link.img}
              text={link.text}
              notify={link.notification}
            />
          ))}
          <div
            className="leftLink hover1"
            onClick={() => {
              setVisible(false);
            }}
          >
            <div className="small_circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Show less</span>
          </div>
        </div>
      )}
      <div className="splitter">
        <div className="shortcut">
          <div className="heading">Your Shortcut</div>
          <div className="edit">Edit</div>
        </div>
        <div className="shortcut_link">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
