import React, { useState } from "react";

import MapComponent from "pigeon-maps";
import Marker from "./Marker";
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

const markers = [
  {
    coord: [40, -78],
    name: "Mike B.",
    deckType: "Silver",
    deckNumber: 1
  },
  {
    coord: [42, -83.7],
    name: "Sheng S. L.",
    deckType: "Collector",
    deckNumber: 1
  },
  {
    coord: [51, 0],
    name: "Ronald O.",
    deckType: "Collector",
    deckNumber: 4
  },
  {
    coord: [41, -74],
    name: "Dennis L.",
    deckType: "Collector",
    deckNumber: 6
  },
  {
    coord: [-31, 116],
    name: "Ellen N.",
    deckType: "Collector",
    deckNumber: 5
  },
  {
    coord: [-34, 116],
    name: "Pat B.",
    deckType: "Collector",
    deckNumber: 2
  },
  {
    coord: [1.3, 104],
    name: "Joel J.",
    deckType: "Collector",
    deckNumber: 3
  }
];
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
      {markers.map((marker, index) => (
        <Marker
          key={index}
          anchor={marker.coord}
          name={marker.name}
          edition={marker.deckType}
          deckId={marker.deckNumber}
          onClick={() => {
            setCenter(marker.coord);
            setZoom(5.2);
          }}
        />
      ))}
    </MapComponent>
  );
};

export default Map;
