import React, { useState } from "react";
import style from "./Modal.module.css";

export default function Modal({ toggleModal, desc, title }) {
  const { modal, overlay, modalcontent, closemodal } = style;
  return (
    <>
      {
        <div className={modal}>
          <div onClick={toggleModal} className={overlay}></div>
          <div className={modalcontent}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button className={closemodal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      }
    </>
  );
}
