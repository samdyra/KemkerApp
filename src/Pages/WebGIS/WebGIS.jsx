import React from "react";
import style from "./WebGIS.module.css";
import { MapContainer, TileLayer } from "react-leaflet";
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
              <Keterangan></Keterangan>
              <Penerbit></Penerbit>
              <Legenda></Legenda>
              <Referensi></Referensi>
              <SecondaryFooter></SecondaryFooter>
            </div>
          </div>
          <div className={mapContainer}>
            <MapContainer
              center={[-6.927348780149033, 107.7695420971685]}
              zoom={16}
              style={{
                height: "100%",
                position: "relative",
                zIndex: 0,
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Minimap position="topleft"></Minimap>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebGIS;
