import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "@/entities/settings/model";

export const store = configureStore({
  reducer: {
    settingsReducer: settingsSlice,
  },
});
