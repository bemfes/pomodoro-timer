import { renderHookWithProvider } from "@config/jest/renderHookWithProvider";
import { usePomodoroTimer } from "./usePomodoroTimer";
import { act } from "@testing-library/react";
import { setTime } from "@/entities/timer";

describe("usePomodoroTimer", () => {
  beforeEach(() => {
    Object.defineProperty(global, "Audio", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        play: jest.fn(() => Promise.resolve()),
        pause: jest.fn(),
      })),
    });
  });
  it("should return correct values", () => {
    const { result } = renderHookWithProvider(usePomodoroTimer);

    expect(result.current).toHaveProperty("isRunning");
    expect(result.current).toHaveProperty("minutes");
    expect(result.current).toHaveProperty("seconds");
    expect(result.current).toHaveProperty("color");
    expect(result.current).toHaveProperty("percentage");
    expect(result.current).toHaveProperty("handleChangeIsRunning");
  });
  it("should change the default title to timer title", () => {
    const { result } = renderHookWithProvider(usePomodoroTimer);
    expect(document.title).toBe("Pomodoro Timer");

    act(() => {
      result.current.handleChangeIsRunning();
    });

    expect(document.title).toBe("25:00 - pomodoro");
  });
  it("should correctly format the minutes", () => {
    const { result, store } = renderHookWithProvider(usePomodoroTimer);
    act(() => {
      store.dispatch(setTime(1000));
    });
    expect(result.current.minutes).toBe("16");
  });
  it("should correctly format the seconds", () => {
    const { result, store } = renderHookWithProvider(usePomodoroTimer);
    act(() => {
      store.dispatch(setTime(1000));
    });
    expect(result.current.seconds).toBe("40");
  });
  it("should correctly update isRunning value by handleChangeIsRunning", () => {
    const { result } = renderHookWithProvider(usePomodoroTimer);

    act(() => {
      result.current.handleChangeIsRunning();
    });

    expect(result.current.isRunning).toBe(true);
  });
  it("should correctly count the percentage", () => {
    const { result, store } = renderHookWithProvider(usePomodoroTimer);

    act(() => {
      store.dispatch(setTime(750));
    });

    expect(result.current.percentage).toBe(50);
  });
  it("should go from pomodoro mode to short break mode", () => {
    const { store } = renderHookWithProvider(usePomodoroTimer);

    act(() => {
      store.dispatch(setTime(-1));
    });

    expect(store.getState().timerReducer.mode).toBe("shortBreak");
  });
});
