import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Colors, InitialState } from "./types";
import { Fonts } from "./types";
import { TIMER_DEFAULT_DURATIONS } from "@/shared/constants";

const initialState: InitialState = {
  ...TIMER_DEFAULT_DURATIONS,
  color: "red",
  font: "manrope",
  soundOn: true,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changePomodoro(state, action: PayloadAction<number>) {
      state.pomodoro = action.payload;
    },
    changeShortBreak(state, action: PayloadAction<number>) {
      state.shortBreak = action.payload;
    },
    changeLongBreak(state, action: PayloadAction<number>) {
      state.longBreak = action.payload;
    },
    changeFont(state, action: PayloadAction<Fonts>) {
      state.font = action.payload;
    },
    changeColor(state, action: PayloadAction<Colors>) {
      state.color = action.payload;
    },
    switchSound(state) {
      state.soundOn = !state.soundOn;
    },
  },
});

export const {
  changePomodoro,
  changeShortBreak,
  changeLongBreak,
  changeFont,
  changeColor,
  switchSound,
} = settingsSlice.actions;

export default settingsSlice.reducer;
