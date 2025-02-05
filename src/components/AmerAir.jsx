import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AmerAir = () => {
  const position = [32.7905, -96.8103]; // Coordinates for 2500 Victory Ave, Dallas, TX

  return (
    <MapContainer center={position} zoom={15} style={{ height: "320px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          2500 Victory Ave, Dallas, TX 75219
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default AmerAir;
