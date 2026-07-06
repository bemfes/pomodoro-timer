import { renderWithProvider } from "@config/jest/renderWithProvider";
import TimerInput from "./TimerInput";
import { fireEvent } from "@testing-library/react";

const renderTimerInput = (props = {}) => {
  return renderWithProvider(
    <TimerInput
      value={25}
      htmlFor="pomodoro"
      id="pomodoro"
      labelText="pomodoro"
      onChange={jest.fn()}
      onBlur={jest.fn()}
      handleIncrease={jest.fn()}
      handleDecrease={jest.fn()}
      {...props}
    />,
  );
};

describe("TimerInput", () => {
  it("should call handleIncrease callback if arrow up button is clicked", () => {
    const handleIncrease = jest.fn();
    const { container } = renderTimerInput({ handleIncrease });
    const arrowUp = container.querySelectorAll(".btn")[0];
    fireEvent.click(arrowUp);
    expect(handleIncrease).toHaveBeenCalled();
  });
  it("should call handleDecrease callback if arrow down button is clicked", () => {
    const handleDecrease = jest.fn();
    const { container } = renderTimerInput({ handleDecrease });
    const arrowDown = container.querySelectorAll(".btn")[1];
    fireEvent.click(arrowDown);
    expect(handleDecrease).toHaveBeenCalled();
  });
  it("should call onBlur callback when input is not focused anymore", () => {
    const onBlur = jest.fn();
    const { container } = renderTimerInput({ onBlur });
    const input = container.querySelector("input");
    fireEvent.focus(input as HTMLElement);
    fireEvent.blur(input as HTMLElement);
    expect(onBlur).toHaveBeenCalled();
  });
  it("should call onChange callback when input is changed", () => {
    const onChange = jest.fn();
    const { container } = renderTimerInput({ onChange });
    const input = container.querySelector("input");
    fireEvent.change(input as HTMLElement, { target: { value: "23" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should disable increase button when value is over the limit", () => {
    const { container } = renderTimerInput({ value: "65" });
    const buttonUp = container.querySelectorAll("button")[0];
    expect(buttonUp).toBeDisabled();
  });
  it("should disable decrease button when value is less than the limit", () => {
    const { container } = renderTimerInput({ value: "-4" });
    const buttonDown = container.querySelectorAll("button")[1];
    expect(buttonDown).toBeDisabled();
  });
});
