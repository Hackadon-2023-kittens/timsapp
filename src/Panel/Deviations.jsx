import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import StationsList from "./StationsList";
import { selectStationsDeviations } from "../store/selectors";
import StationLoad from "./StationLoad";
import { fetchDeviations } from "../store/deviationsSlice";

export default function Deviations() {
  const dispatch = useDispatch();
  const stationsDeviations = useSelector(selectStationsDeviations);

  useEffect(() => {
    dispatch(fetchDeviations());
  }, []);

  return (
    <StationsList
      stations={stationsDeviations}
      renderItemExtra={(station) => (
        <StationLoad
          load={Math.floor((station.deviation * 100 + 100) / 2)}
          label={`${Math.floor(station.deviation * 100)}%`}
        />
      )}
    />
  );
}
