"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filterState {
  date: string | null;
  time: string | null;
}

const initialState: filterState = {
  date: null,
  time: null,
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
  },
});

export const { setDate, setTime } = filterSlice.actions;

export default filterSlice.reducer;
