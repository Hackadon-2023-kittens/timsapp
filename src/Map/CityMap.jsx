import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadMarkers from "./LoadsMarkers";

const position = [48.766666, 11.433333];

export default function CityMap() {
  return (
    <MapContainer
      style={{ height: "100%", width: "calc(100% - 360px)" }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routes>
        <Route index element={<LoadMarkers />} />
        <Route path="/delays" element={2} />
      </Routes>
    </MapContainer>
  );
}
