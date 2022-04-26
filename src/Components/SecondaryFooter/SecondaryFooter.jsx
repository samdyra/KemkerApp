import React from "react";
import style from "./SecondaryFooter.module.css";
import { twitterLogo, insta, github, logoKemker, footerLine } from "../../Assets";

const SecondaryFooter = () => {
  const {
    UHIFootercontainer,
    UHIFooterelementcontainer,
    UHIFooteraboutuscontainer,
    UHIFooterlogo,
    UHIFootercontact,
    UHIFootercontactlogo,
    UHIFooterfblinkedin,
    UHIFooterigwa,
    UHIFooterline,
    UHIFootercopyright,
  } = style;
  return (
    <div className={UHIFootercontainer}>
      <div className={UHIFooterelementcontainer}>
        <div className={UHIFooteraboutuscontainer}>
          <img className={UHIFooterlogo} src={logoKemker}></img>
          <p>ABOUT US</p>
        </div>
        <div className={UHIFootercontact}>
          <p>CONTACT</p>
          <div className={UHIFootercontactlogo}>
            <div className={UHIFooterfblinkedin}>
              <img src={github}></img>
              <img src={github}></img>
            </div>
            <div className={UHIFooterigwa}>
              <img src={insta}></img>
              <img src={insta}></img>
            </div>
          </div>
        </div>
      </div>
      <div className={UHIFooterline}>
        <img src={footerLine}></img>
      </div>
      <div className={UHIFootercopyright}>
        <p>Copyright © 2022 Kemah Kerja. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SecondaryFooter;
