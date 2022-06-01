import React from "react";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./AboutScreen.module.css";
import { noImage } from "../../Assets";
import foto from "../../Assets/Images/fotokemker.png";
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
    bcd,
  } = style;
  return (
    <div className={bc}>
      <div className={bcd}>
        <img src={foto}></img>
      </div>
      <Navbar></Navbar>
      <div className={headerWrapper}>
        <div className={headerText}>Kemah Kerja 2022</div>
      </div>
      <div className={descWrapper}>
        <div className={descImage}>
          <img src={noImage}></img>
        </div>
        <div className={descContainer}>
          <div className={descTitle}>Kemah Kerja 2022</div>
          <div className={descContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            optio natus odit sequi? Quis similique vitae quibusdam natus sequi
            iusto corrupti aliquid enim cumque perspiciatis nisi magni ducimus
            reprehenderit asperiores soluta maxime, dicta hic obcaecati quisquam
            accusantium? Earum maiores voluptatibus officia voluptas labore.
            Ducimus nulla, labore fugiat alias deserunt cupiditate.
          </div>
        </div>
      </div>
      <div className={madeWrapper}>
        <div className={madeTitle}>What We Made</div>
        <div className={madeElementWrapper}>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={noImage}></img>
            </div>
            <div className={madeElementTitle}>WebGIS</div>
            <div className={madeElementContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
              ratione laudantium ducimus vel sapiente, qui ea! Earum, sit ullam!
              Dignissimos iure quam ab dolore ipsam fugit voluptatem
              voluptatibus quas.
            </div>
            <div className={madeElementButton}>View WebGIS</div>
          </div>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={noImage}></img>
            </div>
            <div className={madeElementTitle}>WebGIS</div>
            <div className={madeElementContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
              ratione laudantium ducimus vel sapiente, qui ea! Earum, sit ullam!
              Dignissimos iure quam ab dolore ipsam fugit voluptatem
              voluptatibus quas.
            </div>
            <div className={madeElementButton}>View WebGIS</div>
          </div>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={noImage}></img>
            </div>
            <div className={madeElementTitle}>WebGIS</div>
            <div className={madeElementContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
              ratione laudantium ducimus vel sapiente, qui ea! Earum, sit ullam!
              Dignissimos iure quam ab dolore ipsam fugit voluptatem
              voluptatibus quas.
            </div>
            <div className={madeElementButton}>View WebGIS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
