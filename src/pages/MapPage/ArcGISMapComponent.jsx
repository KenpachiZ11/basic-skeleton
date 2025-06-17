import React, { useEffect, useState } from 'react';
import { loadModules } from 'esri-loader';

export const ArcGISMapComponent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadModules([
      "esri/Map",
      "esri/views/MapView",
      "esri/widgets/Home",
      "esri/widgets/ScaleBar",
      "esri/widgets/LayerList",
      "esri/widgets/Legend",
      "esri/widgets/Expand",
      "esri/widgets/Compass",
      "esri/geometry/Extent",
      "esri/layers/MapImageLayer"
    ]).then(([Map, MapView, Home, ScaleBar, LayerList, Legend, Expand, Compass, Extent, MapImageLayer]) => {
        const layer = new MapImageLayer({ url: "https://wellgis.corp.lukoil.com/arcgis/rest/services/%D0%A2%D0%BE%D0%BF%D0%BE%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0_%D0%A0%D0%A4/MapServer" });

        const map = new Map({ layers: [layer] });
        const view = new MapView({ container: "viewDiv", map: map });

        view.when(() => {
          const initialExtent = Extent.fromJSON(layer.sourceJSON.initialExtent);
          view.goTo(initialExtent);
        });

        const homeBtn = new Home({ view: view });
        const scaleBar = new ScaleBar({ view: view, unit: "dual" });
        const layerList = new LayerList({ view: view });
        const legend = new Legend({ view: view });

        const layerListExpand = new Expand({
          view: view,
          content: layerList,
          expanded: false,
          expandTooltip: "Expand LayerList"
        });

        const legendExpand = new Expand({
          view: view,
          content: legend,
          expandTooltip: "Expand Legend",
          expanded: false
        });

        const compass = new Compass({
          view: view,
          visible: false
        });

        view.ui.add(homeBtn, "top-left");
        view.ui.add(scaleBar, "bottom-right");
        view.ui.add(layerListExpand, "top-right");
        // view.ui.add(legendExpand, "bottom-left");
        view.ui.add(compass, "top-left");

        view.watch('rotation', function (rotation) {
          if (rotation && !compass.visible) {
            compass.visible = true;
          }
        });

        setLoaded(true);
      })
      .catch(error => {
        console.error('Ошибка загрузки карты:', error);
      });
  }, []);

  return loaded ? null : <div>Loading...</div>; 
};