import React, { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./AboutScreen.module.css";
import {
  logoGD19,
  logoKemker,
  logoIMG,
  insta,
  twitterLogo,
  github,
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto10,
  foto11,
} from "../../Assets";
import foto from "../../Assets/Images/fotokemker.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockData from "../../Constants/mockData.json";
import ornamen from "../../Assets/Images/ornamengv.png";
import judulImage from "../../Assets/Images/judul2.png";
import capitalizeFirstLetter from "../../Helpers/globalHelper";
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
    hwc,
    jdl,
  } = style;

  const [image, setImage] = useState([]);
  useEffect(() => {
    const imageRef = collection(db, "gallery");
    const q = query(imageRef);
    onSnapshot(q, (snapshot) => {
      const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImage(images);
    });
  }, []);

  const [message, setMessage] = useState([]);
  useEffect(() => {
    const messageRef = collection(db, "message");
    const q = query(messageRef);
    onSnapshot(q, (snapshot) => {
      const message = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessage(message);
    });
  }, []);

  const [kamerad, setKamerad] = useState([]);
  useEffect(() => {
    const kameradRef = collection(db, "kamerad");
    const q = query(kameradRef, orderBy("kelompok"));
    onSnapshot(q, (snapshot) => {
      const kamerads = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKamerad(kamerads);
    });
  }, []);

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

  const groupedKamerad = kamerad.reduce((groupedKamerad, kamerad) => {
    const kelompok = kamerad.klmpkID;
    if (groupedKamerad[kelompok] == null) groupedKamerad[kelompok] = [];
    groupedKamerad[kelompok].push(kamerad);
    return groupedKamerad;
  }, {});

  const finalGroupValue = Object.entries(groupedKamerad);
  const parsedImage = image.map((image) => {
    return image.image;
  });
  const ReversedData = parsedImage.slice(0).reverse();
  const [offsetX, setOffsetX] = useState(0); // data bernama offsetX
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
      <div className={hwc}>
        <img src={ornamen}></img>
      </div>
      <div className={headerWrapper}>
        <div className={headerContainer}>
          {/* <div className={gd}></div>
          <div className={headerText}></div> */}
          <div className={jdl}>
            <img src={judulImage}></img>
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
            src={foto4}
            style={{
              transform: `translateX(-${offsetX * 0.01}px) translateY(-${
                offsetY * 0.01
              }px)`,
            }}
          ></img>
          <img
            className={laxImageTwo}
            src={foto1}
            style={{
              transform: `translateX(-${offsetX * 0.018}px) translateY(-${
                offsetY * 0.018
              }px)`,
            }}
          ></img>
          <img
            className={laxImageThree}
            src={foto2}
            style={{
              transform: `translateX(-${offsetX * 0.024}px) translateY(-${
                offsetY * 0.024
              }px)`,
            }}
          ></img>
          <img
            className={laxImageFour}
            src={foto3}
            style={{
              transform: `translateX(${offsetX * 0.01}px) translateY(${
                offsetY * 0.01
              }px)`,
            }}
          ></img>
          <img
            className={laxImageFive}
            src={foto5}
            style={{
              transform: `translateX(-${offsetX * 0.02}px) translateY(-${
                offsetY * 0.02
              }px)`,
            }}
          ></img>
          <img
            className={laxImageSix}
            src={foto6}
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
          <img src={foto7}></img>
        </div>
        <div className={descContainer}>
          <div className={descTitle}>What Are We</div>
          <div className={descContent}>
            Geodesy and Geomatics Students were required to apply the
            theoritical basis of geodesy and geomatics engineering through
            surveying and mapping project at ITB Kampus Jatinangor with
            supervision from respective lecturers and lab. assistant from
            Laboratorium Survey dan Pemetaan ITB. This course provides an
            opportunity for students to implement skills that theyve acquired
            throughout the years, and also an opportunity to bond together to
            become a solid team.
          </div>
        </div>
      </div>
      <div className={madeWrapper}>
        <div className={madeTitle}>What We Made</div>
        <div className={madeElementWrapper}>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={foto8}></img>
            </div>
            <div className={madeElementTitle}>WebGIS</div>
            <div className={madeElementContent}>
              Web based GIS (Geographic Information System) of ITB Kampus
              Jatinangor. We hope this feature would contribute to realized a
              continuous monitoring and sustainable development of ITB Kampus
              Jatinangor.
            </div>
            <a href="/WebGIS">
              <div className={madeElementButton}>View</div>
            </a>
          </div>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={foto11}></img>
            </div>
            <div className={madeElementTitle}>Pipe Mapping</div>
            <div className={madeElementContent}>
              A map of distribution of pipes in ITB Kampus Jatinangor. We hope
              by analyzing and mapping the distribution of pipes, a future
              analysis such as water source management and flood risk mitigation
              could be made.
            </div>
            <a href="/ProfileModelScreen">
              <div className={madeElementButton}>View</div>
            </a>
          </div>
          <div className={madeElementContainer}>
            <div className={madeElementImage}>
              <img src={foto10}></img>
            </div>
            <div className={madeElementTitle}>
              Reporting & <br></br> Monitoring System
            </div>
            <div className={madeElementContent}>
              In order to maximize the productivty of this project, a reporting
              and monitoring system is made. The feature consist of graph of a S
              curve, and a admin dashboard for managing the data.
            </div>
            <a href="/KurvaS">
              <div className={madeElementButton}>View</div>
            </a>
          </div>
        </div>
      </div>
      <div className={creatorWrapper}>
        <div className={creatorTitle}>Who We Are</div>
        <Slider {...creatorSettings} className={creatorCarouselElements}>
          {finalGroupValue.map((kelompok) => {
            return (
              <div className={carouselElements} tabIndex="0">
                <div className={caElContainer}>
                  <div className={caElTitle}>
                    {capitalizeFirstLetter(kelompok[0])}
                  </div>
                  <div className={caElMember}>
                    {kelompok[1].map((anggota) => {
                      return (
                        <div className={caElMemberContainer}>
                          <img src={anggota.image}></img>
                          <div className={caElMemberName}>{anggota.Nama}</div>
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
            {message.map((message) => {
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
            {image.map((image) => {
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
                  <img src={image}></img>
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
