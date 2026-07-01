import { TIMER_MAX_VALUE, TIMER_MIN_VALUE } from "@/shared/constants";
import { ChangeEvent, useState } from "react";

export const useHandleTimerInput = (
  initialValue: number,
  dispatchValue: (val: number) => void,
) => {
  const [value, setValue] = useState<string>(initialValue.toString());

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleInputBlur = () => {
    if (value.trim() === "") {
      setValue(initialValue.toString());
      return;
    }
    const blurValue = Math.floor(Math.min(60, Math.max(1, Number(value))));
    setValue(blurValue.toString());
    dispatchValue(blurValue);
  };

  const handleIncrease = () => {
    const currentValue = Number(value);
    if (currentValue >= TIMER_MAX_VALUE) return;
    const finalValue = currentValue + 1;
    setValue(finalValue.toString());
    dispatchValue(finalValue);
  };
  const handleDecrease = () => {
    const currentValue = Number(value);
    if (currentValue <= TIMER_MIN_VALUE) return;
    const finalValue = currentValue - 1;
    setValue(finalValue.toString());
    dispatchValue(finalValue);
  };

  return {
    value,
    handleInputChange,
    handleInputBlur,
    handleIncrease,
    handleDecrease,
  };
};
