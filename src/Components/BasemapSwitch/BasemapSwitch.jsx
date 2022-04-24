import React from "react";
import style from "./BasemapSwitch.module.css";
import { lightMode, nightMode } from "../../Assets";
const BasemapSwitch = () => {
  const { formswitch, container } = style;
  return (
    <div className={container}>
      <p>Basemap Mode</p>
      <img
        src={lightMode}
        style={{ height: "20px", width: "20px", marginRight: "7px" }}
      ></img>
      <label className={formswitch}>
        <input type="checkbox" />
        <i></i>
      </label>
      <img src={nightMode} style={{ height: "20px", width: "20px" }}></img>
    </div>
  );
};

export default BasemapSwitch;
