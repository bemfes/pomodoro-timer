import { createSlice } from "@reduxjs/toolkit";

type Colors = "red" | "blue" | "purple";

type Fonts = "manrope" | "georgian" | "jet";

interface InitialState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  color: Colors;
  font: Fonts;
}

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
  reducers: {},
});

export default settingsSlice.reducer;
