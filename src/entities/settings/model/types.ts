export type Colors = "red" | "blue" | "lavender";

export type Fonts = "manrope" | "georgian" | "jet";

export interface InitialState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  color: Colors;
  font: Fonts;
  soundOn: boolean;
}
