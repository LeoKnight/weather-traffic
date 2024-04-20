"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filterState {
  date: string | null;
  time: string | null;
  currentCoordinates: [number, number] | null;
  currentLocation: string | null;
  currentForecast: string | null;
}

const initialState: filterState = {
  date: null,
  time: null,
  currentCoordinates: null,
  currentLocation: null,
  currentForecast: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    setCurrentLocation: (state, action: PayloadAction<string>) => {
      state.currentLocation = action.payload;
    },
    setCurrentCoordinates: (state, action: PayloadAction<[number, number]>) => {
      state.currentCoordinates = action.payload;
    },
    setCurrentForecast: (state, action: PayloadAction<string>) => {
      state.currentForecast = action.payload;
    },
  },
});

export const {
  setDate,
  setTime,
  setCurrentLocation,
  setCurrentForecast,
  setCurrentCoordinates,
} = filterSlice.actions;

export default filterSlice.reducer;
