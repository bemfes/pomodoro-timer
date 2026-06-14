import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import {
  changeLongBreak,
  changePomodoro,
  changeShortBreak,
} from "@/entities/settings";
import { ChangeEvent } from "react";

export const useChangeTimer = () => {
  const { pomodoro, longBreak, shortBreak } = useAppSelector(
    (state) => state.settingsReducer,
  );

  const dispatch = useAppDispatch();

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
  };
};
