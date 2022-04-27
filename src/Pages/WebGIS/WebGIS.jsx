import React, { useState } from "react";
import style from "./WebGIS.module.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import data from "../../Constants/Shapefiles/cirebonDatabase.json";

import {
  Pembatas,
  SearchBar,
  BasemapSwitch,
  Dropdown,
  ImageSlider,
  Penerbit,
  SecondaryFooter,
  Minimap,
  Legenda,
  Referensi,
  Maptitle,
  Keterangan,
} from "../../Components";
const WebGIS = () => {
  const { container, settingContainer, legendContainer, mapContainer, wrapper, settingWrapper, legendStyle } = style;
  const [uhiValue, setUhiValue] = useState("24.18");
  const [nightLightValue, setNightLightValue] = useState("11.7109");
  const [ndbiValue, setNdbiValue] = useState("-69.2544");
  const [ndviValue, setNdviValue] = useState("0.472515");
  const [kelurahanValue, setKelurahanValue] = useState("Larangan");
  const [kecamatanValue, setKecamatanValue] = useState("Harjamukti");
  const getColor = (d) => {
    return d == 20.16
      ? "rgb(181, 237, 240)"
      : d >= 20.16 && d <= 23.26
      ? "rgb(116, 180, 232)"
      : d >= 23.26 && d <= 25.63
      ? "rgb(31, 131, 224)"
      : d >= 25.63 && d <= 26.91
      ? "rgb(29, 68, 184)"
      : d >= 26.91 && d <= 29.3
      ? "rgb(9, 9, 145)"
      : "";
  };

  const polygonStyle = (feature) => {
    return {
      fillColor: getColor(feature.properties.UHI),
      weight: 0.8,
      opacity: 1,
      border: "solid",
      color: "rgb(110,110,110)",
      dashArray: "",
      fillOpacity: 0.6,
    };
  };

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      fillOpacity: 0.8,
      weight: 2,
    });
  }

  function resetHighlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      fillOpacity: 0.6,
      weight: 0.8,
    });
  }
  const onEachPolygons = (feature, layer) => {
    const uhiValue = feature.properties.UHI;
    const nightLightValue = feature.properties.NL;
    const ndbiValue = feature.properties.NDBI;
    const ndviValue = feature.properties.NDVI;
    const kelurahanValue = feature.properties.Kelurahan;
    const kecamatanValue = feature.properties.Kecamatan;

    function paramsFunc() {
      setUhiValue(uhiValue);
      setNightLightValue(nightLightValue);
      setNdbiValue(ndbiValue);
      setNdviValue(ndviValue);
      setKelurahanValue(kelurahanValue);
      setKecamatanValue(kecamatanValue);
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
              <ImageSlider></ImageSlider>
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
              center={[-6.733252, 108.552161]}
              zoom={13}
              style={{
                height: "100%",
                position: "relative",
                zIndex: 0,
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <GeoJSON data={data} onEachFeature={onEachPolygons} style={polygonStyle}></GeoJSON>
              <Minimap position="topleft"></Minimap>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebGIS;
