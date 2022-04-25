import React from "react";
import { noImage } from "../../Assets";
import "./ImageSlider.css";
const ImageSlider = () => {
  return (
    <div className="imageContainer">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1"></input>
          <input type="radio" name="radio-btn" id="radio2"></input>
          <input type="radio" name="radio-btn" id="radio3"></input>
          <div className="slide first">
            <img src={noImage}></img>
          </div>
          <div className="slide">
            <img src={noImage}></img>
          </div>
          <div className="slide">
            <img src={noImage}></img>
          </div>
        </div>
        <div className="navigation-manual">
          <label for="radio1" className="manual-btn"></label>
          <label for="radio2" className="manual-btn"></label>
          <label for="radio3" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
