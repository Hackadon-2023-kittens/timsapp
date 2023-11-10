import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = createSelector(
  (state) => state.loads.isLoading,
  (state) => state.deviations.isLoading,
  (loadsLoading, deviationsLoading) => loadsLoading || deviationsLoading
);

export const selectError = createSelector(
  (state) => state.loads.error,
  (state) => state.deviations.error,
  (loadsError, deviationsError) => loadsError || deviationsError
);

export const selectStationsLoads = createSelector(
  (state) => state.loads,
  (loads) => loads.stationsLoads
);

export const selectStationsDeviations = createSelector(
  (state) => state.deviations,
  (deviations) => deviations.stationsDeviations
);

export const selectSelectedStation = createSelector(
  (state) => state.selectedStation,
  (selectedStation) => selectedStation.selectedStation
);
