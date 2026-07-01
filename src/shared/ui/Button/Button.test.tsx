import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render children", () => {
    render(
      <Button className="btn" onClick={jest.fn}>
        click me
      </Button>,
    );
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });
  it("should invoke onClick callback when user clicks", () => {
    const onClick = jest.fn();
    render(
      <Button className="btn" onClick={onClick}>
        click me
      </Button>,
    );
    const elem = screen.getByRole("button");
    fireEvent.click(elem);
    expect(onClick).toHaveBeenCalled();
  });
  it("should have correct classname", () => {
    render(
      <Button className="btn" onClick={jest.fn}>
        click me
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveClass("btn");
  });
  it("should be disabled when prop disabled is true", () => {
    render(
      <Button disabled={true} className="btn" onClick={jest.fn}>
        click me
      </Button>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("should not be disabled when prop disabled is false", () => {
    render(
      <Button disabled={false} className="btn" onClick={jest.fn}>
        click me
      </Button>,
    );
    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
