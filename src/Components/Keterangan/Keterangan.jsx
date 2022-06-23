import React from "react";
import style from "./Keterangan.module.css";

const Keterangan = ({ id, nameObj, area, coorX, coorY, contour }) => {
  const {
    referencecontainer,
    referencetitle,
    referencewrapper,
    reference,
    titikdua,
    referencedata,
  } = style;
  return (
    <div className={referencecontainer}>
      <div className={referencetitle}>
        <h1>KETERANGAN</h1>
      </div>
      <div className={referencewrapper}>
        <div className={reference}>
          <div>Objek ID</div>
          <div>Nama Objek</div>
          <div>Jenis Objek</div>
          <div>Luas Area</div>
          <div>Keliling Area </div>
          <div>Link Foto</div>
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
          <div>{id}</div>
          <div>{nameObj}</div>
          <div>{area}</div>
          <div>{coorX}</div>
          <div>{coorY}</div>
          <div>{contour}</div>
        </div>
      </div>
    </div>
  );
};

export default Keterangan;
