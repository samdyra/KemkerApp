import React from "react";
import style from "./WebGIS.module.css";
import { MapContainer, TileLayer } from "react-leaflet";
import {
  Pembatas,
  SearchBar,
  BasemapSwitch,
  Dropdown,
  ImageSlider,
} from "../../Components";

const WebGIS = () => {
  const {
    container,
    settingContainer,
    legendContainer,
    mapContainer,
    wrapper,
    settingWrapper,
  } = style;
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
            <ImageSlider></ImageSlider>
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
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebGIS;
