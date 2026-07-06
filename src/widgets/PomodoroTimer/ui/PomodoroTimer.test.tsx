import { renderWithProvider } from "@config/jest/renderWithProvider";
import PomodoroTimer from "./PomodoroTimer";
import { act, fireEvent, screen } from "@testing-library/react";
import { setTime } from "@/entities/timer";

describe("PomodoroTimer", () => {
  it("should change button text RUN to PAUSE when user clicks it", () => {
    renderWithProvider(<PomodoroTimer />);

    const button = screen.getByRole("button", { name: /run/i });

    expect(screen.getByText(/run/i)).toBeInTheDocument();

    fireEvent.click(button as HTMLElement);

    expect(screen.getByText(/pause/i)).toBeInTheDocument();
  });
  it("should correctly display time", () => {
    renderWithProvider(<PomodoroTimer />);
    expect(screen.getByText(/25:00/i)).toBeInTheDocument();
  });
  it("should display timer modes buttons", () => {
    renderWithProvider(<PomodoroTimer />);
    expect(
      screen.getByRole("button", { name: /pomodoro/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /short break/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /long break/i }),
    ).toBeInTheDocument();
  });
  it("should update isRunning value in store when user clicks the RUN button", () => {
    const { store } = renderWithProvider(<PomodoroTimer />);
    const button = screen.getByRole("button", { name: /run/i });

    expect(store.getState().timerReducer.isRunning).toBe(false);

    fireEvent.click(button as HTMLElement);

    expect(store.getState().timerReducer.isRunning).toBe(true);
  });
  it("should correctly display time when timeLeft value changes in store", () => {
    const { store } = renderWithProvider(<PomodoroTimer />);

    act(() => {
      store.dispatch(setTime(1000));
    });

    expect(screen.getByText(/16:40/)).toBeInTheDocument();
  });
});
