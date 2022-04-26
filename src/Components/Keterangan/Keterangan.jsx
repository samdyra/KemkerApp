import React from "react";
import style from "./Keterangan.module.css";

const Keterangan = () => {
  const { referencecontainer, referencetitle, referencewrapper, reference, titikdua, referencedata } = style;
  return (
    <div className={referencecontainer}>
      <div className={referencetitle}>
        <h1>KETERANGAN</h1>
      </div>
      <div className={referencewrapper}>
        <div className={reference}>
          <div>Objek ID</div>
          <div>Keterangan Objek</div>
          <div>Luas Area</div>
          <div>Koordinat X</div>
          <div>Koordinat Y</div>
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
          <div>67</div>
          <div>Bangunan A</div>
          <div>67 Ha</div>
          <div>-6.927348</div>
          <div>107.7695</div>
          <div>12,5 Meter</div>
        </div>
      </div>
    </div>
  );
};

export default Keterangan;
