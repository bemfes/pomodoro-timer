import { renderWithProvider } from "@config/jest/renderWithProvider";
import ChangeFont from "./ChangeFont";
import { fireEvent } from "@testing-library/react";

describe("ChangeColor", () => {
  it("should update font in store when font button is clicked", () => {
    const { container, store } = renderWithProvider(<ChangeFont />);
    const jetButton = container.querySelector(".jet");
    expect(store.getState().settingsReducer.font).toBe("manrope");
    fireEvent.click(jetButton!);
    expect(store.getState().settingsReducer.font).toBe("jet");
  });
  it("should add active class to clicked button", () => {
    const { container } = renderWithProvider(<ChangeFont />);
    const jetButton = container.querySelector(".jet");
    fireEvent.click(jetButton!);
    expect(jetButton).toHaveClass("active");
  });
});
