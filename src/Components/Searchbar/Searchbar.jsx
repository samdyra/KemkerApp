import React from "react";
import { searchLogo } from "../../Assets";
import style from "./Searchbar.module.css";

const Searchbar = () => {
  const { searchcontainer, topnav } = style;
  return (
    <div className={searchcontainer}>
      <div className={topnav}>
        <input type="text" placeholder="Search.." />
      </div>
      <img src={searchLogo} style={{ height: "18px", width: "18px" }}></img>
    </div>
  );
};

export default Searchbar;
