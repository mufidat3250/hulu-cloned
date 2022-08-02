import React, { useState } from "react";
import "./Header.css";
import {
  Home,
  FlashOn,
  LiveTv,
  VideoLibrary,
  Search,
  PersonOutline,
} from "@material-ui/icons";
const Header = () => {
  const [navTab, setNavtab] = useState(false);
  return (
    <div className="Header">
      <div>
        <img
          src="/public/vectors/handbugger.svg"
          alt=""
          onClick={() => setNavtab(!navTab)}
          className="handbugger"
        />
        <div
          className={`header__icon_Container  ${navTab ? "displayNav" : ""} `}
        >
          <div className="side__nav_container">
            <img
              src="/public/vectors/close2.svg"
              style={{
                alignSelf: "flex-end",
                marginRight: "20px",
                marginBottom: "50px",
              }}
              onClick={() => setNavtab(false)}
              className="closeIcon"
            />
            <div className="header__item">
              <div className="header__icon header__icon--active">
                <Home className="icon" />
                <p>Home</p>
              </div>
              <div className="header__icon">
                <FlashOn className="icon" />
                <p>Trending</p>
              </div>
              <div className="header__icon">
                <LiveTv className="icon" />
                <p>Verified</p>
              </div>
              <div className="header__icon">
                <VideoLibrary className="icon" />
                <p>Collections</p>
              </div>
              <div className="header__icon">
                <Search className="icon" />
                <p>Search</p>
              </div>
              <div className="header__icon">
                <PersonOutline className="icon" />
                <p>Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
          alt=""
          className="hulu__logo"
        />
      </div>
    </div>
  );
};

export default Header;
