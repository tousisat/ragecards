import React, { useState } from "react";

import MapComponent from "pigeon-maps";
import Marker from "pigeon-marker";
import "./Map.scss";

const providers = {
  osm: (x, y, z) => {
    const s = String.fromCharCode(97 + ((x + y + z) % 3));
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
  },
  wikimedia: (x, y, z, dpr) => {
    return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${
      dpr >= 2 ? "@2x" : ""
    }.png`;
  },
  stamen: (x, y, z, dpr) => {
    return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${
      dpr >= 2 ? "@2x" : ""
    }.jpg`;
  }
};

const markers = {
  leuven1: [50.879, 4.6997],
  leuven2: [50.874, 4.6947],
  brussels: [50.8505, 4.35149],
  ghent: [51.0514, 3.7103],
  coast: [51.2214, 2.9541]
};

const Map = props => {
  const [center, setCenter] = useState([50.1102, 3.1506]);
  const [zoom, setZoom] = useState(2.5);

  return (
    <MapComponent
      limitBounds="edge"
      center={center}
      zoom={zoom}
      provider={providers["stamen"]}
      dprs={[1, 2]}
      animate={true}
      metaWheelZoom={false}
      twoFingerDrag={true}
      zoomSnap={true}
      mouseEvents={true}
      touchEvents={true}
      minZoom={2.5}
      maxZoom={5}
      defaultWidth={500}
      height={550}
      boxClassname="pigeon-filters"
    >
      {Object.keys(markers).map(key => (
        <Marker
          key={key}
          anchor={markers[key]}
          onClick={() => {
            setCenter(markers[key]);
            setZoom(5.5);
          }}
        />
      ))}
    </MapComponent>
  );
};

export default Map;
