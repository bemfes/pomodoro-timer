export { default } from "./model/timerSlice";

export {
  changeTimerMode,
  changeIsRunning,
  tick,
  goToNextMode,
  setTime,
} from "./model/timerSlice";

export type { TimerMode } from "./model/timerSlice";

export { TIMER_MODES, TIMER_MODES_LABELS } from "./model/constants";
