import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Route, Routes } from "react-router-dom";
import LoadMarkers from "./LoadsMarkers";
import { AutoMapMover } from "./AutoMapMover";
import DeviationMarkers from "./DeviationMarkers";

const IngolstadtCetner = [48.766666, 11.433333];

export default function CityMap() {
  return (
    <MapContainer
      style={{ height: "100%", width: "calc(100% - 360px)" }}
      center={IngolstadtCetner}
      zoom={13}
      scrollWheelZoom={false}
    >
      <AutoMapMover />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routes>
        <Route index element={<LoadMarkers />} />
        <Route path="/deviations" element={<DeviationMarkers />} />
      </Routes>
    </MapContainer>
  );
}
