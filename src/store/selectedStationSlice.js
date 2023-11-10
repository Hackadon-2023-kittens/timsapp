import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedStation: null,
};

const selectedStationSlice = createSlice({
  name: "selectedStation",
  initialState,
  reducers: {
    setSelectedStation(state, action) {
      state.selectedStation = action.payload;
    },
  },
});

export const { setSelectedStation } = selectedStationSlice.actions;
export default selectedStationSlice.reducer;
