import React from "react";
import style from "./MapTitle.module.css";

const MapTitle = () => {
  const { container, title, skala, kampus } = style;
  return (
    <div className={container}>
      <div className={title}>INSTITUT TEKNOLOGI BANDUNG</div>
      <div className={skala}>1 : 1000</div>
      <div className={kampus}>KAMPUS JATINANGOR</div>
    </div>
  );
};

export default MapTitle;
