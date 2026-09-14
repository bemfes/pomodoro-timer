import { renderHookWithProvider } from "@config/jest/renderHookWithProvider";
import { useChangeFont } from "./useChangeFont";

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
});
