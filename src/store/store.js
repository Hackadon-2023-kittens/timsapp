import { configureStore } from "@reduxjs/toolkit";
import loadsReducer from "./loadsSlice";
import deviationsReducer from "./deviationsSlice";

export const store = configureStore({
  reducer: {
    loads: loadsReducer,
    deviations: deviationsReducer,
  },
});
