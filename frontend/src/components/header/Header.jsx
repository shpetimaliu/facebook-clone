import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useClickOutside from "../../helpers/clickOutside";
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from "../../svg";
import "./Header.css";
import MegaMenu from "./MegaMenu";
import SearchMenu from "./SearchMenu";
import UserMenu from "./userMenu/UserMenu";
export default function Header() {
  const { user } = useSelector((user) => ({ ...user }));
  const color = "#65676b";

  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const megamenu = useRef(null);
  const usermenu = useRef(null);

  useClickOutside(megamenu, () => {
    setShowMegaMenu(false);
  });

  useClickOutside(usermenu, () => {
    setShowUserMenu(false);
  });

  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div
          className="search search1"
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <Search color={color} />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hide_input"
          />
        </div>
      </div>

      {showSearchMenu && (
        <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      )}
      <div className="header_middle">
        <Link to="/" className="middle_icon active">
          <HomeActive />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Friends color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Watch color={color} />
          <div className="middle_notification">9+</div>
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Market color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Gaming color={color} />
        </Link>
      </div>

      <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
          <img src={user?.profili} alt="" />
          <span>{user?.emri}</span>
        </Link>
        <div
          className={`circle_icon hover1 ${showMegaMenu && "active_header"}`}
          ref={megamenu}
          onClick={() => {
            setShowMegaMenu((prev) => !prev);
          }}
        >
          <div style={{ transform: "translateY(2px)" }}>
            <Menu />
          </div>
          {showMegaMenu && <MegaMenu />}
        </div>
        <div className="circle_icon hover1">
          <Messenger />
        </div>
        <div className="circle_icon hover1">
          <Notifications />
          <div className="right_notification">5</div>
        </div>
        <div
          className={`circle_icon hover1 ${showUserMenu && "active_header"}`}
          ref={usermenu}
        >
          <div
            onClick={() => {
              setShowUserMenu((prev) => !prev);
            }}
          >
            <div style={{ transform: "translateY(2px)" }}>
              <ArrowDown />
            </div>
          </div>
          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
}
