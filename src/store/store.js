import { configureStore } from "@reduxjs/toolkit";
import loadsReducer from "./loadsSlice";
import deviationsReducer from "./deviationsSlice";
import selectedStationReducer from "./selectedStationSlice";

export const store = configureStore({
  reducer: {
    loads: loadsReducer,
    deviations: deviationsReducer,
    selectedStation: selectedStationReducer,
  },
});
