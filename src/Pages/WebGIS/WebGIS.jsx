import React, { useState, useEffect, useRef } from "react";
import style from "./WebGIS.module.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import mockNangor from "../../Constants/Shapefiles/jatinangorMock.json";
import {
  Pembatas,
  SearchBar,
  BasemapSwitch,
  Dropdown,
  ImageSlider,
  Penerbit,
} from "../../Components";
import {
  SecondaryFooter,
  Minimap,
  Legenda,
  Referensi,
  Maptitle,
  Keterangan,
  Modal,
} from "../../Components";
import {
  highlightFeature,
  resetHighlightFeature,
  polygonStyling,
} from "../../Helpers";
import { light, dark } from "../../Constants";
import { helpSymbol } from "../../Assets";
import NavBarDefault from "../../ComponentsV2/NavbarDefault";

const WebGIS = () => {
  const {
    container,
    settingContainer,
    legendContainer,
    mapContainer,
    wrapper,
    settingWrapper,
    legendStyle,
    help,
  } = style;
  const [uhiValue, setUhiValue] = useState("1");
  const [nightLightValue, setNightLightValue] = useState("Danau Barat");
  const [ndbiValue, setNdbiValue] = useState("Danau");
  const [ndviValue, setNdviValue] = useState("6579.165");
  const [kelurahanValue, setKelurahanValue] = useState("470.282");
  const [kecamatanValue, setKecamatanValue] = useState(
    "https://gdurl.com/lF9W"
  );
  const [firstImage, setFirstImage] = useState("https://gdurl.com/lF9W");
  const [secondImage, setSecondImage] = useState("https://gdurl.com/ra7En");
  const [modal, setModal] = useState(false);
  const [thirdImage, setThridImage] = useState("https://gdurl.com/ra7En");
  const [colorMode, setColorMode] = useState("light");
  const ref = useRef(null);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const onClick = () => {
    setColorMode((colorMode) => (colorMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.setUrl(colorMode === "light" ? light : dark);
    }
  }, [colorMode]);

  const onEachPolygons = (feature, layer) => {
    const uhiValue = feature.properties.OBJECTID;
    const nightLightValue = feature.properties.nama;
    const ndbiValue = feature.properties.jenis;
    const ndviValue = feature.properties.luas;
    const kelurahanValue = feature.properties.keliling;
    const kecamatanValue = feature.properties.FOTO_1;
    const firstImage = feature.properties.FOTO_1;
    const secondImage = feature.properties.FOTO_2;
    const thirdImage = feature.properties.FOTO_3;

    function paramsFunc() {
      setUhiValue(uhiValue);
      setNightLightValue(nightLightValue);
      setNdbiValue(ndbiValue);
      setNdviValue(ndviValue);
      setKelurahanValue(kelurahanValue);
      setKecamatanValue(kecamatanValue);
      setFirstImage(firstImage);
      setSecondImage(secondImage);
      setThridImage(thirdImage);
    }
    layer.on({
      click: (e) => {
        paramsFunc();
      },
      mouseover: highlightFeature,
      mouseout: resetHighlightFeature,
    });
  };

  return (
    <>
      <NavBarDefault></NavBarDefault>
      <div className={container}>
        <div className={settingContainer}>
          <div className={settingWrapper}>
            <Pembatas></Pembatas>
            <SearchBar></SearchBar>
            <Pembatas></Pembatas>
            <BasemapSwitch onClick={onClick}></BasemapSwitch>
            <Pembatas></Pembatas>
            <Dropdown></Dropdown>
            <Pembatas></Pembatas>
            <img src={helpSymbol} className={help} onClick={toggleModal}></img>
          </div>
        </div>
        <div className={wrapper}>
          <div className={legendContainer}>
            <div className={legendStyle}>
              {modal && (
                <Modal
                  title="Welcome!"
                  toggleModal={toggleModal}
                  desc="Please click one of the polygons on the map to see the statistics on the right!"
                ></Modal>
              )}
              <Maptitle></Maptitle>
              <ImageSlider
                firstImage={firstImage}
                secondImage={secondImage}
                thirdImage={thirdImage}
              ></ImageSlider>
              <Keterangan
                id={uhiValue}
                nameObj={nightLightValue}
                area={ndbiValue}
                coorX={ndviValue}
                coorY={kelurahanValue}
                contour={kecamatanValue}
              ></Keterangan>
              <Penerbit></Penerbit>
              <Legenda></Legenda>
              <Referensi></Referensi>
              <SecondaryFooter></SecondaryFooter>
            </div>
          </div>
          <div className={mapContainer}>
            <MapContainer
              center={[-6.92877232399857, 107.76856033033198]}
              zoom={17}
              style={{ height: "100%", position: "relative", zIndex: 0 }}
            >
              <TileLayer ref={ref} url={colorMode === "light" ? light : dark} />
              <GeoJSON
                data={mockNangor}
                onEachFeature={onEachPolygons}
                style={polygonStyling}
              ></GeoJSON>
              <Minimap position="topleft"></Minimap>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebGIS;
