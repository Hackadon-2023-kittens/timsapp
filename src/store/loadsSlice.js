import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api";

const initialState = { stationsLoads: [], isLoading: false, error: null };

export const fetchLoads = createAsyncThunk("users/fetchLoads", async () =>
  API.fetchLoads()
);

const loadsSlice = createSlice({
  name: "loads",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLoads.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchLoads.fulfilled, (state, action) => {
      state.stationsLoads = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchLoads.rejected, (state, action) => {
      state.stationsLoads = [];
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default loadsSlice.reducer;
