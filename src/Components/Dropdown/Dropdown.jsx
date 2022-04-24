import React from "react";
import style from "./Dropdown.module.css";

const Dropdown = () => {
  const { dropdown, dropbtn, dropdowncontent } = style;
  return (
    <div className={dropdown}>
      <button className={dropbtn}>
        Download Data
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={dropdowncontent}>
        <a href="#">Polygon</a>
        <a href="#">Contour Lines</a>
        <a href="#">Map Layout</a>
      </div>
    </div>
  );
};

export default Dropdown;
