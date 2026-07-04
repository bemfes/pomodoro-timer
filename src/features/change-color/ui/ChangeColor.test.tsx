import { fireEvent } from "@testing-library/react";
import ChangeColor from "./ChangeColor";
import { renderWithProvider } from "@config/jest/renderWithProvider";

describe("ChangeColor", () => {
  it("should correctly update color in store when other button is clicked", () => {
    const { container, store } = renderWithProvider(<ChangeColor />);
    const blueButton = container.querySelector(".blue");
    expect(store.getState().settingsReducer.color).toBe("red");
    fireEvent.click(blueButton!);
    expect(store.getState().settingsReducer.color).toBe("blue");
  });
});
