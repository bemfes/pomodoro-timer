import { renderWithProvider } from "@config/jest/renderWithProvider";
import ChooseTimerMode from "./ChooseTimerMode";
import { fireEvent, screen } from "@testing-library/react";

describe("ChooseTimerMode", () => {
  it("should update mode in store when button is clicked", () => {
    const { store } = renderWithProvider(<ChooseTimerMode />);
    const shortBreakButton = screen.getByText(/short break/i);

    expect(store.getState().timerReducer.mode).toBe("pomodoro");

    fireEvent.click(shortBreakButton);

    expect(store.getState().timerReducer.mode).toBe("shortBreak");
    expect(store.getState().timerReducer.isRunning).toBe(true);
  });
  it("should add class active to the clicked button", () => {
    renderWithProvider(<ChooseTimerMode />);
    const shortBreakButton = screen.getByText(/short break/i);
    const pomodoroButton = screen.getByText(/pomodoro/i);

    expect(pomodoroButton).toHaveClass("active");
    expect(shortBreakButton).not.toHaveClass("active");

    fireEvent.click(shortBreakButton);

    expect(pomodoroButton).not.toHaveClass("active");
    expect(shortBreakButton).toHaveClass("active");
  });
});
