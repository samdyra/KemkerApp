import React from "react";
import style from "./index.module.css";
import { logoKemker } from "../../Assets";

const NavBar = () => {
  const { navcontainer, navelement, kemkerlogocontainer, linkcontainer } =
    style;

  return (
    <div className={navcontainer}>
      <div className={navelement}>
        <div className={kemkerlogocontainer}>
          <a href="/">
            <img src={logoKemker} alt="Logo Kemker"></img>
          </a>
          <div>
            <a href="/">Kemah Kerja Teknik Geodesi dan Geomatika ITB 2022</a>
          </div>
        </div>
        <div className={linkcontainer}>
          <a href="/WebGIS">WebGIS</a>
          <a href="/ProfileModelScreen">Terrain Profiles</a>
          <a href="/FloodModelScreen">Kurva S</a>
          <a href="/loginScreen">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
