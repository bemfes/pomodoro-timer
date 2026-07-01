import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

const renderInput = (props = {}) => {
  render(
    <Input
      value="red"
      onChange={jest.fn()}
      placeholder="main color"
      className="input"
      type="checkbox"
      id="color"
      htmlFor="color"
      labelText="Choose color"
      {...props}
    />,
  );
};

describe("Input", () => {
  it("should render input", () => {
    renderInput();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
  it("should render value", () => {
    renderInput();
    expect(screen.getByDisplayValue(/red/i)).toBeInTheDocument();
  });
  it("should render input with correct placeholder", () => {
    renderInput();
    expect(screen.getByPlaceholderText(/main color/i)).toBeInTheDocument();
  });
  it("should render label with correct text", () => {
    renderInput();
    expect(screen.getByLabelText(/Choose color/i)).toBeInTheDocument();
  });
  it("should invoke onChange callback when user changes input", () => {
    const onChange = jest.fn();
    renderInput({ onChange, type: "text" });
    const elem = screen.getByPlaceholderText(/main color/i);
    fireEvent.change(elem, { target: { value: "yellow" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should render input parent with correct classname", () => {
    renderInput();
    expect(screen.getByRole("checkbox").parentElement).toHaveClass("input");
  });
  it("should render input with correct type", () => {
    renderInput({ type: "range" });
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
  it("should invoke onBlur callback when input loses focus", () => {
    const onBlur = jest.fn();
    renderInput({ onBlur });
    const elem = screen.getByPlaceholderText(/main color/i);
    fireEvent.focus(elem);
    fireEvent.blur(elem);
    expect(onBlur).toHaveBeenCalled();
  });
});
