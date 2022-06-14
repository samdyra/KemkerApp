import React from "react";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./FloodModel.module.css";
import fotoIMG from "../../Assets/Images/logoKemker.png";
import Chart from "../../Components/chart/Chart";
import Table from "../../Components/table/Table";
import Featured from "../../Components/featured/Featured";
import Widget from "../../Components/widget/Widget";
import NavBarDefault from "../../ComponentsV2/NavbarDefault";
import "./home.scss";

const FloodModel = () => {
  const {
    headerWrapper,
    headerText,
    latarContainer,
    latarTitle,
    latarContent,
    hiasanStyle,
    bc,
  } = style;
  return (
    <div className="home">
      <div className="homeContainer">
        <NavBarDefault></NavBarDefault>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Target Kurva S" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default FloodModel;
