import React from "react";
import style from "./Legenda.module.css";

const Legenda = () => {
  const {
    UHIchloropethcontainer,
    UHIChloropethtitle,
    UHIchloropethlegend,
    UHIchloropethcontent,
    chloropethcontainer,
    chlorosymbols,
    chlo1,
    chlo2,
    chlo3,
    chlo4,
    chlo5,
    UHIchloropethcontent2,
    chloropethcontainer2,
    chlorosymbols2,
  } = style;
  return (
    <div className={UHIchloropethcontainer}>
      <div className={UHIChloropethtitle}>
        <h1>LEGENDA</h1>
      </div>
      <div className={UHIchloropethlegend}>
        <div className={UHIchloropethcontent}>
          <div className={chloropethcontainer}>
            <div>Bangunan</div>
            <div>Sawah</div>
            <div>Trek Lari</div>
            <div>Gerbang Depan</div>
            <div>Danau</div>
          </div>
          <div className={chlorosymbols}>
            <div className={chlo1}></div>
            <div className={chlo2}></div>
            <div className={chlo3}></div>
            <div className={chlo4}></div>
            <div className={chlo5}></div>
          </div>
        </div>
        <div className={UHIchloropethcontent2}>
          <div className={chloropethcontainer2}>
            <div>Lahan Kosong</div>
            <div>Jalan</div>
            <div>Hutan</div>
            <div>Sungai</div>
            <div>Lapangan Basket</div>
          </div>
          <div className={chlorosymbols2}>
            <div className={chlo1}></div>
            <div className={chlo2}></div>
            <div className={chlo3}></div>
            <div className={chlo4}></div>
            <div className={chlo5}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legenda;
