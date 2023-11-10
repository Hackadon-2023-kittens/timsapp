import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoads } from "../store/loadsSlice";
import StationsList from "./StationsList";
import { selectStationsLoads } from "../store/selectors";
import StationLoad from "./StationLoad";

export default function Loads() {
  const dispatch = useDispatch();
  const stationsLoads = useSelector(selectStationsLoads);
  const intervalRef = useRef(null);

  useEffect(() => {
    dispatch(fetchLoads());
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => dispatch(fetchLoads()), 10000);
    }

    return () => intervalRef.value !== null && clearInterval(intervalRef.value);
  }, []);

  return (
    <StationsList
      stations={stationsLoads}
      renderItemExtra={(station) => <StationLoad load={station.load} />}
    />
  );
}
