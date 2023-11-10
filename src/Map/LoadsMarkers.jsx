import { useSelector } from "react-redux";
import { selectStationsLoads } from "../store/selectors";
import StationMarker from "./StationMarker";

export default function LoadMarkers() {
  const stationsLoads = useSelector(selectStationsLoads);

  return (
    <>
      {stationsLoads.map((station) => (
        <StationMarker
          key={station.id}
          station={station}
          value={station.load}
          label={`${station.load} People now`}
        />
      ))}
    </>
  );
}
