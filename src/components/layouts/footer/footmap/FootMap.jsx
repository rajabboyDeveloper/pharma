import React from "react";
import style from "./FootMap.module.css";
import { Map, Placemark, TrafficControl, YMaps } from "react-yandex-map";
function FootMap() {
  return (
    <div className={style.map}>
      <YMaps>
        <Map
          width="100%"
          height="500px"
          defaultState={{
            center: [41.338663, 69.33479],
            zoom: 18,
            controls: [],
          }}
        >
          <Placemark geometry={[41.338663, 69.33479]} />
          <TrafficControl
            options={{
              float: "right",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default FootMap;
