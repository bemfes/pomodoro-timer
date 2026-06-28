import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

interface InitialState {
  mode: TimerMode;
  isRunning: boolean;
  timeLeft: number;
  pomodoroCount: number;
}

const initialState: InitialState = {
  mode: "pomodoro",
  isRunning: false,
  timeLeft: 25 * 60,
  pomodoroCount: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeTimerMode(state, action: PayloadAction<TimerMode>) {
      state.mode = action.payload;
      state.isRunning = true;
    },
    changeIsRunning(state) {
      state.isRunning = !state.isRunning;
    },
    tick(state) {
      if (state.timeLeft >= 0) {
        state.timeLeft -= 1;
      }
    },
    setTime(state, action: PayloadAction<number>) {
      state.timeLeft = action.payload;
    },
    goToNextMode(state) {
      if (state.mode === "pomodoro") {
        state.pomodoroCount += 1;
        if (state.pomodoroCount % 4 === 0) {
          state.mode = "longBreak";
        } else {
          state.mode = "shortBreak";
        }
      } else {
        state.mode = "pomodoro";
      }
      state.isRunning = true;
    },
  },
});

export const { changeTimerMode, changeIsRunning, tick, goToNextMode, setTime } =
  timerSlice.actions;

export default timerSlice.reducer;
