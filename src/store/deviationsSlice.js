import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api";

const initialState = { stationsDeviations: [], isLoading: false, error: null };

export const fetchDeviations = createAsyncThunk(
  "users/fetchDeviations",
  async () => {
    try {
      return await API.fetchDeviations();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const deviationsSlice = createSlice({
  name: "deviations",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDeviations.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDeviations.fulfilled, (state, action) => {
      state.stationsDeviations = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchDeviations.rejected, (state, action) => {
      state.stationsDeviations = [];
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deviationsSlice.reducer;
