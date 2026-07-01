import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  it("should render children", () => {
    render(
      <Modal className="modal" isOpen={true} onClick={jest.fn()}>
        <p>modal is open</p>
      </Modal>,
    );
    expect(screen.getByText(/modal is open/i)).toBeInTheDocument();
  });
  it("should render close modal button", () => {
    render(
      <Modal className="modal" isOpen={true} onClick={jest.fn()}>
        <p>modal is open</p>
      </Modal>,
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should not render modal when isOpen is false", () => {
    render(
      <Modal className="modal" isOpen={false} onClick={jest.fn()}>
        <p>modal is open</p>
      </Modal>,
    );
    expect(screen.queryByText(/modal is open/i)).not.toBeInTheDocument();
  });
  it("should invoke onClick callback when user clicks on close modal button", () => {
    const onClick = jest.fn();
    render(
      <Modal className="modal" isOpen={true} onClick={onClick}>
        <p>modal is open</p>
      </Modal>,
    );
    const elem = screen.getByRole("button");
    fireEvent.click(elem);
    expect(onClick).toHaveBeenCalled();
  });
  it("should invoke onClick callback when user presses key Escape", () => {
    const onClick = jest.fn();
    render(
      <Modal className="modal" isOpen={true} onClick={onClick}>
        <p>modal is open</p>
      </Modal>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClick).toHaveBeenCalled();
  });
  it("should invoke onClick callback when user clicks the overlay", () => {
    const onClick = jest.fn();
    render(
      <Modal className="modal" isOpen={true} onClick={onClick}>
        <p>modal is open</p>
      </Modal>,
    );
    const overlay = screen.getByTestId("overlay");
    fireEvent.click(overlay);
    expect(onClick).toHaveBeenCalled();
  });
  it("should not invoke onClick callback when user clicks the modal content", () => {
    const onClick = jest.fn();
    render(
      <Modal className="modal" isOpen={true} onClick={onClick}>
        <p>modal is open</p>
      </Modal>,
    );
    const content = screen.getByText(/modal is open/i);
    fireEvent.click(content);
    expect(onClick).not.toHaveBeenCalled();
  });
});
