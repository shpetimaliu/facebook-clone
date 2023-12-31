import React from "react";

function DisplayAccessibility({ setVisible }) {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle hover1"
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Display Accessibility
      </div>
      <div className="userMenu_main">
        <div className="small_circle" style={{ width: "60px" }}>
          <i className="dark_filled_icon"></i>
        </div>
        <div className="userMenu_col">
          <span>Dark Mode</span>
          <div className="userMenu_span2">
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </div>
        </div>
      </div>
      <label htmlFor="darkOff" className="hover1">
        <span>Off</span>
        <input type="radio" name="dark" id="darkOff" checked />
      </label>
      <label htmlFor="darkOn" className="hover1">
        <span>On</span>
        <input type="radio" name="dark" id="darkOn" />
      </label>
      <div className="userMenu_main">
        <div className="small_circle" style={{ width: "50px" }}>
          <i className="compact_icon"></i>
        </div>
        <div className="userMenu_col">
          <span>Compact mode</span>
          <div className="userMenu_span2">
            Make your font size smaller so more content can fit on the screen.
          </div>
        </div>
      </div>
      <label htmlFor="compactOff" className="hover1">
        <span>Off</span>
        <input type="radio" name="compact" id="compactOff" checked />
      </label>
      <label htmlFor="compactOn" className="hover1">
        <span>On</span>
        <input type="radio" name="compact" id="compactOn" />
      </label>
      <div className="userMenu_item">
        <div className="small_circle">
          <i className="keyboard_icon"></i>
        </div>
        <span>Keyboard</span>
        <div className="rArrow">
          <i className="right_icon"></i>
        </div>
      </div>
    </div>
  );
}

export default DisplayAccessibility;
