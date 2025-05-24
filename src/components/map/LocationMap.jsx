import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LocationMap = ({ lat, lon }) => {
  return (
    <MapContainer center={[lat, lon]} zoom={15} scrollWheelZoom={true} className="h-96 w-full rounded shadow">
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          You're here: [{lat}, {lon}]
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
