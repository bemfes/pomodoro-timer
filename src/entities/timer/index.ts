export { default } from "./model/timerSlice";

export {
  changeTimerMode,
  changeIsRunning,
  tick,
  goToNextMode,
  setTime,
} from "./model/timerSlice";

export type { TimerMode } from "./model/timerSlice";
