import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function SimpleMap() {
    const position = [12.935083, 79.285883]; 

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href=""'
        />
        <Marker position={position}>
          <Popup>
          W8PM+4CV, Navalpur, Ranipet, Tamil Nadu 632401 type this location in your google map
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default SimpleMap;
