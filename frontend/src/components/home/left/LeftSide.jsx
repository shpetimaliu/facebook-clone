import React, { useState } from "react";
import { Link } from "react-router-dom";
import { left } from "../../../data/home";
import { ArrowDown1 } from "../../../svg";
import LeftLink from "./LeftLink";
import "./LeftSide.css";
import Shortcut from "./Shortcut";

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

      <div className="splitter"></div>
      <div className="shortcut">
        <div className="heading">Your Shortcut</div>
        <div className="edit">Edit</div>
      </div>
      <div className="shortcut_link">
        <Shortcut
          link="https://www.github.com/shpetimaliu"
          img="../../images/github.png"
          name="Github"
        />
        <Shortcut
          link="https://codepen.io/shpetimaliu/"
          img="../../images/codepen_animation.gif"
          name="CodePen"
        />
      </div>
      <div className={`fb_copyright ${visible && "relative_fb_copyright"}`}>
        <Link to="/">Privacy</Link>
        <span> · </span>
        <Link to="/">Terms</Link>
        <span> · </span>
        <Link to="/">Advertising</Link>
        <span> · </span>
        <br />
        <Link to="/">
          Ad Choices <i className="adChoices_icon"></i>
        </Link>
        <span> · </span>
        <Link to="/">Cookies</Link>
        <span> · </span>
        <Link to="/">More</Link>
        <span> · </span>
        <br />
        <Link to="/">Meta © 2023 - Cloned by Shpetim Aliu</Link>
      </div>
    </div>
  );
}

export default LeftSide;
