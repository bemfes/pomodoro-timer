import { TimerMode } from "@/entities/timer";

interface ModeItem {
  value: TimerMode;
  label: string;
}

export const TIMER_MODES: ModeItem[] = [
  { value: "pomodoro", label: "pomodoro" },
  { value: "shortBreak", label: "short break" },
  { value: "longBreak", label: "long break" },
];

export const TIMER_MODES_LABELS: Record<TimerMode, string> = {
  pomodoro: "pomodoro",
  shortBreak: "short break",
  longBreak: "long break",
};
