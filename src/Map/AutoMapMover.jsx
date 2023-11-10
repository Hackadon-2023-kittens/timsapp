import { useSelector } from "react-redux";
import { selectSelectedStation } from "../store/selectors";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export function AutoMapMover() {
  const selectedStation = useSelector(selectSelectedStation);

  const map = useMap();

  useEffect(() => {
    if (selectedStation) {
      map.flyTo([selectedStation.lat, selectedStation.lon], 15);
    }
  }, [selectedStation?.id]);

  return null;
}
