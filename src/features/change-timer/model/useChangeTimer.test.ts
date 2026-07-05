import { renderHookWithProvider } from "@config/jest/renderHookWithProvider";
import { useChangeTimer } from "./useChangeTimer";

describe("useChangeTimer", () => {
  it("should return correct values", () => {
    const { result } = renderHookWithProvider(useChangeTimer);
    expect(result.current).toHaveProperty("pomodoroInput");
    expect(result.current).toHaveProperty("shortBreakInput");
    expect(result.current).toHaveProperty("longBreakInput");
  });
});
