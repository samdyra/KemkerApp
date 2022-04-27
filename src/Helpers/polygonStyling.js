const getColor = (d) => {
  return d == 20.16
    ? "rgb(181, 237, 240)"
    : d >= 20.16 && d <= 23.26
    ? "rgb(116, 180, 232)"
    : d >= 23.26 && d <= 25.63
    ? "rgb(31, 131, 224)"
    : d >= 25.63 && d <= 26.91
    ? "rgb(29, 68, 184)"
    : d >= 26.91 && d <= 29.3
    ? "rgb(9, 9, 145)"
    : "";
};

const polygonStyle = (feature) => {
  return {
    fillColor: getColor(feature.properties.UHI),
    weight: 0.8,
    opacity: 1,
    border: "solid",
    color: "rgb(110,110,110)",
    dashArray: "",
    fillOpacity: 0.6,
  };
};

export default polygonStyle;
