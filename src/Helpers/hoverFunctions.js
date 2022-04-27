const highlightFeature = (e) => {
  var layer = e.target;

  layer.setStyle({
    fillOpacity: 0.8,
    weight: 2,
  });
};

const resetHighlightFeature = (e) => {
  var layer = e.target;

  layer.setStyle({
    fillOpacity: 0.6,
    weight: 0.8,
  });
};

export { highlightFeature, resetHighlightFeature };
