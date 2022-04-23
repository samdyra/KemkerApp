import React from "react";
import style from "./WebGIS.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const WebGIS = () => {
  const {
    container,
    settingContainer,
    legendContainer,
    mapContainer,
    wrapper,
  } = style;
  return (
    <>
      <div className={container}>
        <div className={settingContainer}></div>
        <div className={wrapper}>
          <div className={legendContainer}></div>
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
              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebGIS;
