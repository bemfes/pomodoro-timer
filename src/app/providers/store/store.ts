import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "@/entities/settings/model";

export const store = configureStore({
  reducer: {
    settingsReducer: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
