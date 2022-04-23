import React from "react";
import style from "./NavBarStyle.module.css";

const NavBar = () => {
  const {
    navcontainer,
    navelement,
    geolokalogocontainer,
    geolokalogo,
    linkcontainer,
  } = style;

  return (
    <div className={navcontainer}>
      <div className={navelement}>
        <div className={geolokalogocontainer}>
          <img src="" className={geolokalogo}></img>
        </div>
        <div className={linkcontainer}>
          <a href="/">WebGIS</a>
          <a href="/FloodModelScreen">Flood Model</a>
          <a href="/ProfileModelScreen">Profile</a>
          <a href="/AboutScreen">About</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
