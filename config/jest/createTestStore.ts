import { combineReducers, configureStore } from "@reduxjs/toolkit";
import timerSlice from "../../src/entities/timer";
import settingsSlice from "../../src/entities/settings";

const rootReducer = combineReducers({
  settingsReducer: settingsSlice,
  timerReducer: timerSlice,
});

export function createTestStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
