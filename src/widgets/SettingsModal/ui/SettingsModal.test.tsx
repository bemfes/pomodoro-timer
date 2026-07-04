import { renderWithProvider } from "@config/jest/renderWithProvider";
import SettingsModal from "./SettingsModal";
import { fireEvent, screen } from "@testing-library/react";

describe("SettingsModal", () => {
  beforeEach(() => {
    Object.defineProperty(document, "fonts", {
      writable: true,
      value: {
        load: jest.fn().mockResolvedValue([]),
      },
    });
  });
  it("should open modal when open button is clicked", () => {
    const { container } = renderWithProvider(<SettingsModal />);
    const button = container.querySelector(".open");
    fireEvent.click(button!);
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
  });
  it("should be closed by default when app mounts", () => {
    renderWithProvider(<SettingsModal />);
    expect(screen.queryByText(/settings/i)).not.toBeInTheDocument();
  });
  it("should close modal when close button is clicked", () => {
    const { container } = renderWithProvider(<SettingsModal />);
    const button = container.querySelector(".open");
    fireEvent.click(button!);
    const closeButton = container.querySelector(".close");
    fireEvent.click(closeButton!);
    expect(screen.queryByText(/settings/i)).not.toBeInTheDocument();
  });
});
