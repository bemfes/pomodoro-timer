import { renderWithProvider } from "@config/jest/renderWithProvider";
import ChangeTimer from "./ChangeTimer";
import { screen } from "@testing-library/react";

describe("ChangeTimer", () => {
  it("should render all timer inputs", () => {
    renderWithProvider(<ChangeTimer />);

    expect(screen.getByLabelText(/pomodoro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/short break/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/long break/i)).toBeInTheDocument();
  });
});
