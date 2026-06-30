import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import {
  changeLongBreak,
  changePomodoro,
  changeShortBreak,
} from "@/entities/settings";
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

  return {
    pomodoroInput,
    shortBreakInput,
    longBreakInput,
  };
};
