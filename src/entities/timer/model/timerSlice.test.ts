import { TIMER_DEFAULT_DURATIONS } from "@/shared/constants";
import timerReducer, {
  changeTimerMode,
  changeIsRunning,
  tick,
  goToNextMode,
  setTime,
  TimerMode,
} from "./timerSlice";

const initialState = {
  mode: "pomodoro" as TimerMode,
  isRunning: false,
  timeLeft: TIMER_DEFAULT_DURATIONS.pomodoro * 60,
  pomodoroCount: 0,
};

describe("timerSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = timerReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });
  it("should change timer mode and isRunning values with action changeTimerMode", () => {
    const result = timerReducer(initialState, changeTimerMode("shortBreak"));
    expect(result.mode).toBe("shortBreak");
    expect(result.isRunning).toBe(true);
  });
  it("should toggle isRunning value with changeIsRunning action", () => {
    const result = timerReducer(initialState, changeIsRunning());
    expect(result.isRunning).toBe(true);
  });
  it("should decrease timeLeft value by 1 with tick action", () => {
    const result = timerReducer({ ...initialState, timeLeft: 10 }, tick());
    expect(result.timeLeft).toBe(9);
  });
  it("should not decrease timeLeft value by 1 with tick action when timeLeft is less or equal to 0", () => {
    const result = timerReducer({ ...initialState, timeLeft: -1 }, tick());
    expect(result.timeLeft).toBe(-1);
  });
  it("should set timeLeft value with setTime action", () => {
    const result = timerReducer(initialState, setTime(15));
    expect(result.timeLeft).toBe(15);
  });
  it("should change mode from pomodoro to short break when pomodoro count is not divisible by 4 without a remainder", () => {
    const result = timerReducer(initialState, goToNextMode());
    expect(result.mode).toBe("shortBreak");
    expect(result.pomodoroCount).toBe(1);
    expect(result.isRunning).toBe(true);
  });
  it("should change mode from pomodoro to long break when pomodoro count is divisible by 4 without a remainder", () => {
    const result = timerReducer(
      { ...initialState, pomodoroCount: 3 },
      goToNextMode(),
    );
    expect(result.mode).toBe("longBreak");
    expect(result.pomodoroCount).toBe(4);
    expect(result.isRunning).toBe(true);
  });
  it("should change mode from long break to pomodoro", () => {
    const result = timerReducer(
      { ...initialState, mode: "longBreak" },
      goToNextMode(),
    );
    expect(result.mode).toBe("pomodoro");
    expect(result.isRunning).toBe(true);
  });
  it("should change mode from short break to pomodoro", () => {
    const result = timerReducer(
      { ...initialState, mode: "shortBreak" },
      goToNextMode(),
    );
    expect(result.mode).toBe("pomodoro");
    expect(result.isRunning).toBe(true);
  });
});
