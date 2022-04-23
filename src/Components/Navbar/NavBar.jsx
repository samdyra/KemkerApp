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
          <a href="/">Home</a>
          <a href="/UHIScreen">UHI Map</a>
          <a href="/RTRWScreen">RDTR Zoning Map</a>
          <a href="/NetizenScreen">Netizen Contribution</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
