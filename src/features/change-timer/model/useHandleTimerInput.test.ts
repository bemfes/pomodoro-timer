import { renderHookWithProvider } from "@config/jest/renderHookWithProvider";
import { useHandleTimerInput } from "./useHandleTimerInput";
import { act } from "@testing-library/react";
import { ChangeEvent } from "react";

describe("useHnadleTimerInput", () => {
  it("should return correct values", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    expect(result.current).toHaveProperty("value");
    expect(result.current).toHaveProperty("handleInputChange");
    expect(result.current).toHaveProperty("handleInputBlur");
    expect(result.current).toHaveProperty("handleIncrease");
    expect(result.current).toHaveProperty("handleDecrease");
  });
  it("should initialize with default value", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    expect(result.current.value).toBe("25");
  });
  it("should update value on input change", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleInputChange({
        target: { value: "20" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe("20");
    expect(dispatch).not.toHaveBeenCalled();
  });
  it("should call dispatch on input blur", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleInputChange({
        target: { value: "30" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleInputBlur();
    });

    expect(result.current.value).toBe("30");
    expect(dispatch).toHaveBeenCalledWith(30);
  });
  it("should increase value and call dispatch on handleIncrease callback", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleIncrease();
    });

    expect(result.current.value).toBe("26");
    expect(dispatch).toHaveBeenCalledWith(26);
  });
  it("should decrease value and call dispatch on handleDecrease callback", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleDecrease();
    });

    expect(result.current.value).toBe("24");
    expect(dispatch).toHaveBeenCalledWith(24);
  });
  it("should restore initial value when input is empty", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleInputChange({
        target: { value: "" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleInputBlur();
    });

    expect(result.current.value).toBe("25");
    expect(dispatch).not.toHaveBeenCalled();
  });
  it("should set the maximum value if the value is over the limit", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleInputChange({
        target: { value: "65" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleInputBlur();
    });

    expect(result.current.value).toBe("60");
    expect(dispatch).toHaveBeenCalledWith(60);
  });
  it("should set the minimum value if the value is below the limit", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleInputChange({
        target: { value: "-2" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleInputBlur();
    });

    expect(result.current.value).toBe("1");
    expect(dispatch).toHaveBeenCalledWith(1);
  });
  it("should not increase if the maximum value has already been set", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(60, dispatch),
    );

    act(() => {
      result.current.handleIncrease();
    });

    expect(result.current.value).toBe("60");
    expect(dispatch).not.toHaveBeenCalled();
  });
  it("should not decrease if the minimum value has already been set", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(1, dispatch),
    );

    act(() => {
      result.current.handleDecrease();
    });

    expect(result.current.value).toBe("1");
    expect(dispatch).not.toHaveBeenCalled();
  });
  it("should floor the floating-point value", () => {
    const dispatch = jest.fn();
    const { result } = renderHookWithProvider(() =>
      useHandleTimerInput(25, dispatch),
    );

    act(() => {
      result.current.handleInputChange({
        target: { value: "12.3" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleInputBlur();
    });

    expect(result.current.value).toBe("12");
    expect(dispatch).toHaveBeenCalledWith(12);
  });
});
