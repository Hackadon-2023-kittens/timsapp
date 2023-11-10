import { CircleMarker, Popup, Tooltip } from "react-leaflet";
import { getColorForLoad } from "../utils";

export default function StationMarker({ station, value, label }) {
  return (
    <CircleMarker
      pathOptions={{ color: getColorForLoad(value) }}
      radius={10}
      center={[station.lat, station.lon]}
    >
      <Popup>
        {station.name}: {label}
      </Popup>
      <Tooltip>{station.name}</Tooltip>
    </CircleMarker>
  );
}
