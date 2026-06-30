import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import {
  changeLongBreak,
  changePomodoro,
  changeShortBreak,
} from "@/entities/settings";
import { ChangeEvent } from "react";
import { useHandleTimerInput } from "./useHandleTimerInput";

export const useChangeTimer = () => {
  const { pomodoro, longBreak, shortBreak } = useAppSelector(
    (state) => state.settingsReducer,
  );

  const dispatch = useAppDispatch();

  const pomodoroInput = useHandleTimerInput(pomodoro, (val) =>
    dispatch(changePomodoro(val)),
  );

  const shortBreakInput = useHandleTimerInput(shortBreak, (val) =>
    dispatch(changeShortBreak(val)),
  );

  const longBreakInput = useHandleTimerInput(longBreak, (val) =>
    dispatch(changeLongBreak(val)),
  );

  const handleChangePomodoro = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePomodoro(Number(e.target.value)));
  };
  const handleChangeShortBreak = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeShortBreak(Number(e.target.value)));
  };
  const handleChangeLongBreak = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLongBreak(Number(e.target.value)));
  };

  return {
    pomodoro,
    longBreak,
    shortBreak,
    handleChangePomodoro,
    handleChangeShortBreak,
    handleChangeLongBreak,
    pomodoroInput,
    shortBreakInput,
    longBreakInput,
  };
};
