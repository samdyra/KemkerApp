import React from "react";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./AboutScreen.module.css";

const AboutScreen = () => {
  const {
    bc,
    headerWrapper,
    headerText,
    descWrapper,
    descImage,
    descContainer,
    descTitle,
    descContent,
    madeWrapper,
    madeTitle,
    madeElementWrapper,
    madeElementContainer,
    madeElementImage,
    madeElementTitle,
    madeElementContent,
    madeElementButton,
  } = style;
  return (
    <div className={bc}>
      <Navbar></Navbar>
      <div className={headerWrapper}>
        <div className={headerText}>Kemah Kerja 2022</div>
      </div>
      <div className={descWrapper}>
        <div className={descImage}></div>
        <div className={descContainer}>
          <div className={descTitle}></div>
          <div className={descContent}></div>
        </div>
      </div>
      <div className={madeWrapper}>
        <div className={madeTitle}></div>
        <div className={madeElementWrapper}>
          <div className={madeElementContainer}>
            <div className={madeElementImage}></div>
            <div className={madeElementTitle}></div>
            <div className={madeElementContent}></div>
            <div className={madeElementButton}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
