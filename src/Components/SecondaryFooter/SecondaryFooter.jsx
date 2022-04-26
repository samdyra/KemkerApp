import React from "react";
import style from "./SecondaryFooter.module.css";
import { twitterLogo, insta, github, logoIMG, logoGD19 } from "../../Assets";

const SecondaryFooter = () => {
  const {
    footercontainer,
    socinfogdobrakcontainer,
    gdobrak,
    soccontainer,
    socicon,
    copyright,
  } = style;
  return (
    <div className={footercontainer}>
      <div className={socinfogdobrakcontainer}>
        <div className={gdobrak}>
          <img src={logoIMG}></img>
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
        <p>Copyright © 2022 Tim Kemah Kerja 2022. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SecondaryFooter;
