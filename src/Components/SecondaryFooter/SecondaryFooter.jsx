import React from "react";
import style from "./SecondaryFooter.module.css";
import { twitterLogo, insta, github, logoKemker, logoGD19 } from "../../Assets";

const SecondaryFooter = () => {
  const { footercontainer, socinfogdobrakcontainer, gdobrak, socicon, soccontainer, copyright } = style;
  return (
    <div className={footercontainer}>
      <div className={socinfogdobrakcontainer}>
        <div className={gdobrak}>
          <img src={logoKemker}></img>
          <img src={logoGD19}></img>
        </div>
        <div className={soccontainer}>
          <p>Reach us!</p>
          <div className={socicon}>
            <img src={twitterLogo}></img>
            <img src={insta}></img>
            <img src={github}></img>
          </div>
        </div>
      </div>
      <div className={copyright}>
        <div>Copyright © 2022 Tim Kemah Kerja 2022. All rights reserved.</div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
