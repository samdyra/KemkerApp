import React, { useState } from "react";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./AboutScreen.module.css";
import {
  noImage,
  logoGD19,
  logoKemker,
  logoIMG,
  insta,
  twitterLogo,
  github,
  webgis,
  engineering,
  flood,
} from "../../Assets";
import foto from "../../Assets/Images/fotokemker.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockData from "../../Constants/mockData.json";

const AboutScreen = () => {
  const {
    bc,
    gd,
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
    creatorWrapper,
    creatorTitle,
    creatorCarousel,
    galleryWrapper,
    galleryTitle,
    galleryCarousel,
    messageWrapper,
    messageTitle,
    messageCarousel,
    footer,
    footerElements,
    footerLogos,
    footerSocmeds,
    footerTexts,
    creatorCarouselElements,
    carouselElements,
    caElContainer,
    caElTitle,
    caElMember,
    caElMemberContainer,
    caElMemberName,
    galleryElementContainer,
    lottie,
    messageDesc,
    meElContainer,
    meElName,
    meElNim,
    meElme,
    meElEl,
    headerDesc,
    parallaxWrapper,
    headerContainer,
    laxImageOne,
    laxImageTwo,
    laxImageThree,
    laxImageFour,
    laxImageFive,
    laxImageSix,
  } = style;
  const creatorSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  const gallerySettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  const messageSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ReversedData = mockData[1].slice(0).reverse();

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  window.addEventListener("mousemove", (e) => {
    return setOffsetY(e.clientY);
  });

  window.addEventListener("mousemove", (e) => {
    return setOffsetX(e.clientX);
  });

  return (
    <div className={bc}>
      <Navbar></Navbar>
      <div className={headerWrapper}>
        <div className={headerContainer}>
          <div className={gd}>GD306</div>
          <div className={headerText}>
            Kemah Kerja
            <br />
            2022
          </div>
          <div className={headerDesc}>
            GD3206 Field Camp is part of Geodesy and Geomatics Engineering
            curriculum for third year students. This course provides an
            opportunity for students to implement skills that theyve acquired
            throughout the years, especially on geodesy and geomatics
            engineering.
          </div>
        </div>
        <div className={parallaxWrapper}>
          <img
            className={laxImageOne}
            src={noImage}
            style={{
              transform: `translateX(-${offsetX * 0.01}px) translateY(-${
                offsetY * 0.01
              }px)`,
            }}
          ></img>
          <img
            className={laxImageTwo}
            src={noImage}
            style={{
              transform: `translateX(-${offsetX * 0.018}px) translateY(-${
                offsetY * 0.018
              }px)`,
            }}
          ></img>
          <img
            className={laxImageThree}
            src={noImage}
            style={{
              transform: `translateX(-${offsetX * 0.024}px) translateY(-${
                offsetY * 0.024
              }px)`,
            }}
          ></img>
          <img
            className={laxImageFour}
            src={noImage}
            style={{
              transform: `translateX(${offsetX * 0.01}px) translateY(${
                offsetY * 0.01
              }px)`,
            }}
          ></img>
          <img
            className={laxImageFive}
            src={noImage}
            style={{
              transform: `translateX(-${offsetX * 0.02}px) translateY(-${
                offsetY * 0.02
              }px)`,
            }}
          ></img>
          <img
            className={laxImageSix}
            src={noImage}
            style={{
              transform: `translateX(${offsetX * 0.015}px) translateY( ${
                offsetY * 0.015
              }px)`,
            }}
          ></img>
        </div>
      </div>
      <div className={descWrapper}>
        <div className={descImage}>
          <img src={noImage}></img>
        </div>
        <div className={descContainer}>
          <div className={descTitle}>What Are We</div>
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
            <div className={madeElementButton}>View</div>
          </div>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={noImage}></img>
            </div>
            <div className={madeElementTitle}>Terrain Profiles</div>
            <div className={madeElementContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
              ratione laudantium ducimus vel sapiente, qui ea! Earum, sit ullam!
              Dignissimos iure quam ab dolore ipsam fugit voluptatem
              voluptatibus quas.
            </div>
            <div className={madeElementButton}>View</div>
          </div>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={noImage}></img>
            </div>
            <div className={madeElementTitle}>Flood Model</div>
            <div className={madeElementContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure
              ratione laudantium ducimus vel sapiente, qui ea! Earum, sit ullam!
              Dignissimos iure quam ab dolore ipsam fugit voluptatem
              voluptatibus quas.
            </div>
            <div className={madeElementButton}>View</div>
          </div>
        </div>
      </div>
      <div className={creatorWrapper}>
        <div className={creatorTitle}>Who We Are</div>
        <Slider {...creatorSettings} className={creatorCarouselElements}>
          {mockData[0].map((kelompok) => {
            return (
              <div className={carouselElements} tabIndex="0">
                <div className={caElContainer}>
                  <div
                    className={caElTitle}
                  >{`Kelompok ${kelompok.kelompok}`}</div>
                  <div className={caElMember}>
                    {kelompok.anggota.map((anggota) => {
                      return (
                        <div className={caElMemberContainer}>
                          <img src={anggota.image}></img>
                          <div className={caElMemberName}>{anggota.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={messageWrapper}>
        <div className={messageTitle}>What is it like in Kemah Kerja 2022</div>
        <div className={messageDesc}>See what others have to say about us</div>
        <div className={messageCarousel}>
          <Slider {...messageSettings}>
            {mockData[2].map((message) => {
              return (
                <div className={meElContainer}>
                  <div className={meElEl}>
                    <div className={meElName}>{message.nama}</div>
                    <div className={meElNim}>{message.nim}</div>
                    <div className={meElme}>{`"${message.message}"`}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className={galleryWrapper}>
        <div className={galleryTitle}>Kemah Kerja 2022 Gallery</div>
        <div className={galleryCarousel}>
          <Slider {...gallerySettings}>
            {mockData[1].map((image) => {
              return (
                <div className={galleryElementContainer}>
                  <img src={image.image}></img>
                </div>
              );
            })}
          </Slider>
          <Slider {...gallerySettings}>
            {ReversedData.map((image) => {
              return (
                <div className={galleryElementContainer}>
                  <img src={image.image}></img>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className={footer}>
        <div className={footerElements}>
          <div className={footerLogos}>
            <img src={logoGD19}></img>
            <img src={logoIMG}></img>
            <img src={logoKemker}></img>
          </div>
          <div className={footerSocmeds}>
            <img src={insta}></img>
            <img src={twitterLogo}></img>
            <img src={github}></img>
          </div>
        </div>
        <div className={footerTexts}>
          Copyright © 2022 Kemah Kerja Teknik Geodesi dan Geomatika ITB 2019.
          All right reserved.
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
