import { useSelector } from "react-redux";
import { selectStationsLoads } from "../store/selectors";
import { CircleMarker, Marker, Popup, Tooltip } from "react-leaflet";
import { getColorForLoad } from "../utils";

export default function LoadMarkers() {
  const stationsLoads = useSelector(selectStationsLoads);

  return (
    <>
      {stationsLoads.map((station) => (
        <CircleMarker
          pathOptions={{ color: getColorForLoad(station.load) }}
          radius={10}
          key={station.id}
          center={[station.lat, station.lon]}
        >
          <Popup>{station.name}</Popup>
          <Tooltip>{station.name}</Tooltip>
        </CircleMarker>
      ))}
    </>
  );
}
