import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "../../src/entities/timer";
import settingsSlice from "../../src/entities/settings";

export function createTestStore() {
  return configureStore({
    reducer: {
      timerReducer: timerSlice,
      settingsReducer: settingsSlice,
    },
  });
}
