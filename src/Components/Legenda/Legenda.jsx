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
    chlo6,
    chlo7,
    chlo8,
    chlo9,
    chlo10,
    chlo11,
    chlo12,
    chlo13,
    chlo14,
    chlo15,
    chlo16,
    chlo17,
    chlo18,
    chlo19,
    chlo20,
    chlo21,
    chlo22,
    chlo23,
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
            <div>Lampu Jalan</div>
            <div>Pohon Satuan</div>
            <div>Tiang Listrik</div>
            <div>Trotoar</div>
            <div>Gardu Listrik</div>
            <div>Jalan Aspal</div>
            <div>Jalan Setapak</div>
            <div>Waduk</div>
            <div>Tugu Monumen</div>
            <div>Lapangan Basket</div>
            <div>Tempat Sampah</div>
            <div>Gerbang</div>
          </div>
          <div className={chlorosymbols}>
            <div className={chlo1}></div>
            <div className={chlo2}></div>
            <div className={chlo3}></div>
            <div className={chlo4}></div>
            <div className={chlo5}></div>
            <div className={chlo6}></div>
            <div className={chlo7}></div>
            <div className={chlo8}></div>
            <div className={chlo9}></div>
            <div className={chlo10}></div>
            <div className={chlo11}></div>
            <div className={chlo12}></div>
          </div>
        </div>
        <div className={UHIchloropethcontent2}>
          <div className={chloropethcontainer2}>
            <div>Trek Lari</div>
            <div>Bangunan</div>
            <div>Jembatan</div>
            <div>Hutan Bambu</div>
            <div>Hutan Campuran</div>
            <div>Belukar</div>
            <div>Sawah</div>
            <div>Ladang</div>
            <div>Sungai</div>
            <div>Kontur</div>
            <div>Kontur Indeks</div>
          </div>
          <div className={chlorosymbols2}>
            <div className={chlo13}></div>
            <div className={chlo14}></div>
            <div className={chlo15}></div>
            <div className={chlo16}></div>
            <div className={chlo17}></div>
            <div className={chlo18}></div>
            <div className={chlo19}></div>
            <div className={chlo20}></div>
            <div className={chlo21}></div>
            <div className={chlo22}></div>
            <div className={chlo23}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legenda;
