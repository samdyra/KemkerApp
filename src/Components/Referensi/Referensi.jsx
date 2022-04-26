import React from "react";
import style from "./Referensi.module.css";

const Referensi = () => {
  const { referencecontainer, referencetitle, referencewrapper, reference, titikdua, referencedata } = style;
  return (
    <div className={referencecontainer}>
      <div className={referencetitle}>
        <h1>KOORDINAT REFERENSI</h1>
      </div>
      <div className={referencewrapper}>
        <div className={reference}>
          <div>Coordinate System </div>
          <div>Projection</div>
          <div>Datum Horizontal</div>
          <div>Datum Vertikal</div>
          <div>Satuan Tinggi</div>
          <div>Selang Kontur</div>
        </div>
        <div className={titikdua}>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
        </div>
        <div className={referencedata}>
          <div>WGS 1984</div>
          <div>Transverse Mercator</div>
          <div>WGS84</div>
          <div>DGN95</div>
          <div>Meter</div>
          <div>12,5 Meter</div>
        </div>
      </div>
    </div>
  );
};

export default Referensi;
