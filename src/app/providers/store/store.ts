import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsSlice from "@/entities/settings";
import timerSlice from "@/entities/timer";

const rootReducer = combineReducers({
  settingsReducer: settingsSlice,
  timerReducer: timerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
