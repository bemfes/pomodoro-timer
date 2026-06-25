import ChooseTimerMode from "@/features/choose-timer-mode";
import Button from "@/shared/ui/Button";
import { usePomodoroTimer } from "../model/usePomodoroTimer";
import styles from "./PomodoroTimer.module.css";
import CircleProgressBar from "@/shared/ui/CircleProgressBar";

const PomodoroTimer = () => {
  const { isRunning, timeLeft, color, percentage, handleChangeIsRunning } =
    usePomodoroTimer();

  return (
    <div className={styles.container}>
      <ChooseTimerMode />
      <CircleProgressBar
        percentage={percentage}
        strokeColorActive={`var(--${color})`}
        strokeColorBg="green"
        strokeWidth={12}
        radius={180}
      >
        <p>timer: {timeLeft}</p>
        <Button className="" onClick={handleChangeIsRunning}>
          {isRunning ? "PAUSE" : "RUN"}
        </Button>
      </CircleProgressBar>
    </div>
  );
};

export default PomodoroTimer;
