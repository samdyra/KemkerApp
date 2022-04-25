import React from "react";
import style from "./NavBarStyle.module.css";
import { logoKemker } from "../../Assets";

const NavBar = () => {
  const { navcontainer, navelement, kemkerlogocontainer, linkcontainer } =
    style;

  return (
    <div className={navcontainer}>
      <div className={navelement}>
        <div className={kemkerlogocontainer}>
          <img src={logoKemker} alt="Logo Kemker"></img>
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
