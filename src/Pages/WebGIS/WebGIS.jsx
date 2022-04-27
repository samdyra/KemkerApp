import React, { useState } from "react";
import style from "./WebGIS.module.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import data from "../../Constants/Shapefiles/cirebonDatabase.json";
import { Pembatas, SearchBar, BasemapSwitch, Dropdown, ImageSlider, Penerbit } from "../../Components";
import { SecondaryFooter, Minimap, Legenda, Referensi, Maptitle, Keterangan } from "../../Components";
import { highlightFeature, resetHighlightFeature, polygonStyling } from "../../Helpers";

const WebGIS = () => {
  const { container, settingContainer, legendContainer, mapContainer, wrapper, settingWrapper, legendStyle } = style;
  const [uhiValue, setUhiValue] = useState("24.18");
  const [nightLightValue, setNightLightValue] = useState("11.7109");
  const [ndbiValue, setNdbiValue] = useState("-69.2544");
  const [ndviValue, setNdviValue] = useState("0.472515");
  const [kelurahanValue, setKelurahanValue] = useState("Larangan");
  const [kecamatanValue, setKecamatanValue] = useState("Harjamukti");
  const [firstImage, setFirstImage] = useState("https://gdurl.com/ra7En");
  const [secondImage, setSecondImage] = useState("https://gdurl.com/ra7En");
  const [thirdImage, setThridImage] = useState("https://gdurl.com/ra7En");

  const onEachPolygons = (feature, layer) => {
    const uhiValue = feature.properties.UHI;
    const nightLightValue = feature.properties.NL;
    const ndbiValue = feature.properties.NDBI;
    const ndviValue = feature.properties.NDVI;
    const kelurahanValue = feature.properties.Kelurahan;
    const kecamatanValue = feature.properties.Kecamatan;
    const firstImage = feature.properties.Foto_1;
    const secondImage = feature.properties.Foto_2;
    const thirdImage = feature.properties.Foto_3;

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
      <div className={container}>
        <div className={settingContainer}>
          <div className={settingWrapper}>
            <Pembatas></Pembatas>
            <SearchBar></SearchBar>
            <Pembatas></Pembatas>
            <BasemapSwitch></BasemapSwitch>
            <Pembatas></Pembatas>
            <Dropdown></Dropdown>
            <Pembatas></Pembatas>
          </div>
        </div>
        <div className={wrapper}>
          <div className={legendContainer}>
            <div className={legendStyle}>
              <Maptitle></Maptitle>
              <ImageSlider firstImage={firstImage} secondImage={secondImage} thirdImage={thirdImage}></ImageSlider>
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
            <MapContainer center={[-6.733252, 108.552161]} zoom={13} style={{ height: "100%", position: "relative", zIndex: 0 }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <GeoJSON data={data} onEachFeature={onEachPolygons} style={polygonStyling}></GeoJSON>
              <Minimap position="topleft"></Minimap>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebGIS;
