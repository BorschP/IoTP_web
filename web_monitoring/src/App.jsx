import './App.css'
import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';


const centerPosition = [13.7563, 100.5018]; // Latitude, Longitude of the center point
const minZoom = 5;
const maxZoom = 17;

const markers = [
  {
      geoMap: [13.7563, 101.5018],
      popUp: "Position camera number 1"
  },
  {
      geoMap: [13.7563, 102.5018],
      popUp: "Position camera number 2"
  },
  {
      geoMap: [13.7563, 103.5018],
      popUp: "Position camera number 3"
  }
]

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2709/2709353.png",
  iconSize: [38,38]
})

const maxBounds = [
  // กำหนดพิกัดขอบเขตสูงสุดของแผนที่
  [5.6128, 97.3447], // พิกัดทิศใต้
  [20.4659, 105.6364], // พิกัดทิศเหนือ
];


function App() {
  return (
    /*canvas map*/
    <div>
      <MapContainer center={centerPosition} zoom={13} style={{ width: '100%'}} minZoom={minZoom} maxZoom={maxZoom} maxBounds={maxBounds}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="OpenStreetMap"
        />
        {markers.map((markers , index)=>(
          <Marker key={index} position={markers.geoMap} icon={customIcon}>
            <Popup>
              {markers.popUp}
            </Popup>
          </Marker>
        ))
        }
      </MapContainer>
    </div>
  )
}

export default App
