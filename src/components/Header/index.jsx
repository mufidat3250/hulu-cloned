import React from "react";
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
  return (
    <div className="Header">
      <div className="header__icon_Container">
        <div className="header__icon header__icon--active">
          <Home />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
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
