import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  MobileSider: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.MobileSider = true;
    },
    closeSidebar: (state) => {
      state.MobileSider = false;
    },
    toggleSidebar: (state) => {
      state.MobileSider = !state.MobileSider;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = appSlice.actions;

export const appState = (state: RootState) => state.app;

export default appSlice.reducer;
