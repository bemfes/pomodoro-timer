import { renderHookWithProvider } from "@config/jest/renderHookWithProvider";
import { useChangeFont } from "./useChangeFont";
import { act } from "@testing-library/react";

describe("useChangeFont", () => {
  beforeEach(() => {
    document.body.removeAttribute("data-font");
  });
  it("should return correct values", () => {
    const { result } = renderHookWithProvider(useChangeFont);

    expect(result.current).toHaveProperty("font");
    expect(result.current).toHaveProperty("handleChangeFont");

    expect(typeof result.current.font).toBe("string");
    expect(typeof result.current.handleChangeFont).toBe("function");
  });
  it("should set data-font attribute with default font value to body on mount", () => {
    renderHookWithProvider(useChangeFont);

    expect(document.body).toHaveAttribute("data-font", "manrope");
  });
  it("should update body data-font attribute when font changes", () => {
    const { result } = renderHookWithProvider(useChangeFont);
    act(() => {
      result.current.handleChangeFont("jet");
    });
    expect(document.body).toHaveAttribute("data-font", "jet");
  });
});
