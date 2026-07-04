import { useChangeColor } from "./useChangeColor";
import { renderHookWithProvider } from "@config/jest/renderHookWithProvider";

describe("useChangeColor", () => {
  it("should return correct values", () => {
    const { result } = renderHookWithProvider(useChangeColor);

    expect(result.current).toHaveProperty("color");
    expect(result.current).toHaveProperty("handleChangeColor");

    expect(typeof result.current.color).toBe("string");
    expect(typeof result.current.handleChangeColor).toBe("function");
  });
});
