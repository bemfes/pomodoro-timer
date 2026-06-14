import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Colors, InitialState } from "./types";
import { Fonts } from "./types";

const initialState: InitialState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  color: "red",
  font: "manrope",
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
  },
});

export const {
  changePomodoro,
  changeShortBreak,
  changeLongBreak,
  changeFont,
  changeColor,
} = settingsSlice.actions;

export default settingsSlice.reducer;
