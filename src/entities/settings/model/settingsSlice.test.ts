import settingsReducer, {
  changePomodoro,
  changeShortBreak,
  changeLongBreak,
  changeFont,
  changeColor,
  switchSound,
} from "./settingsSlice";
import { Colors, Fonts } from "./types";

const initialState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  color: "red" as Colors,
  font: "manrope" as Fonts,
  soundOn: true,
};

describe("settingsSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = settingsReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });
  it("should change pomodoro value with changePomodoro action", () => {
    const result = settingsReducer(initialState, changePomodoro(30));
    expect(result.pomodoro).toBe(30);
  });
  it("should change short break value with changeShortBreak action", () => {
    const result = settingsReducer(initialState, changeShortBreak(10));
    expect(result.shortBreak).toBe(10);
  });
  it("should change long break value with changeLongBreak action", () => {
    const result = settingsReducer(initialState, changeLongBreak(20));
    expect(result.longBreak).toBe(20);
  });
  it("should change color value with changeColor action", () => {
    const result = settingsReducer(initialState, changeColor("blue"));
    expect(result.color).toBe("blue");
  });
  it("should change font value with changeFont action", () => {
    const result = settingsReducer(initialState, changeFont("jet"));
    expect(result.font).toBe("jet");
  });
  it("should toggle soundOn value with switchSound action", () => {
    const result = settingsReducer(initialState, switchSound());
    expect(result.soundOn).toBe(false);
  });
});
