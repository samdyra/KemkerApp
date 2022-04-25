import React from "react";
import style from "./Penerbit.module.css";
import { logoITB } from "../../Assets";

const Penerbit = () => {
  const { penerbitcontainer, penerbittextcontainer } = style;
  return (
    <div className={penerbitcontainer}>
      <img src={logoITB}></img>
      <div className={penerbittextcontainer}>
        <h1>DIBUAT DAN DITERBITKAN OLEH:</h1>
        <p>
          Teknik Geodesi dan Geomatika ITB Jl. Ganesa No.10, Lb. Siliwangi,
          Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
        </p>
      </div>
    </div>
  );
};

export default Penerbit;
