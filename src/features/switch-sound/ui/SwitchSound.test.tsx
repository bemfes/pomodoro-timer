import { renderWithProvider } from "@config/jest/renderWithProvider";
import SwitchSound from "./SwitchSound";
import { fireEvent, screen } from "@testing-library/react";

describe("SwitchSound", () => {
  it("should update soundOn in store when button is clicked", () => {
    const { store } = renderWithProvider(<SwitchSound />);
    const button = screen.getByRole("button");
    expect(store.getState().settingsReducer.soundOn).toBe(true);
    fireEvent.click(button);
    expect(store.getState().settingsReducer.soundOn).toBe(false);
  });
  it("should have off text and on text", () => {
    renderWithProvider(<SwitchSound />);
    expect(screen.getByText(/off/i)).toBeInTheDocument();
    expect(screen.getByText(/on/i)).toBeInTheDocument();
  });
  it("should toggle classname active when button is clicked", () => {
    renderWithProvider(<SwitchSound />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("active");
    fireEvent.click(button);
    expect(button).not.toHaveClass("active");
  });
});
