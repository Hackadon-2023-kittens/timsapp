import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoads } from "../store/loadsSlice";
import StationsList from "./StationsList";
import { selectStationsLoads } from "../store/selectors";
import StationLoad from "./StationLoad";

export default function Loads() {
  const dispatch = useDispatch();
  const stationsLoads = useSelector(selectStationsLoads);

  useEffect(() => {
    dispatch(fetchLoads());
  }, []);

  return (
    <StationsList
      stations={stationsLoads}
      renderItemExtra={(station) => <StationLoad load={station.load} />}
    />
  );
}
