import { useSelector } from "react-redux";
import StationMarker from "./StationMarker";
import { selectStationsDeviations } from "../store/selectors";

export default function DeviationMarkers() {
  const stationsDeviations = useSelector(selectStationsDeviations);

  return (
    <>
      {stationsDeviations.map((station) => (
        <StationMarker
          key={station.id}
          station={station}
          value={Math.floor((station.deviation * 100 + 100) / 2)}
          label={`${station.deviation > 0 ? "+" : ""}${Math.floor(
            station.deviation * 100
          )}% from average people count`}
        />
      ))}
    </>
  );
}
