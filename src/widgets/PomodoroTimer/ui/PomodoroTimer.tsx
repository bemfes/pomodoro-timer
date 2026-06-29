import ChooseTimerMode from "@/features/choose-timer-mode";
import Button from "@/shared/ui/Button";
import { usePomodoroTimer } from "../model/usePomodoroTimer";
import styles from "./PomodoroTimer.module.css";
import CircleProgressBar from "@/shared/ui/CircleProgressBar";

const PomodoroTimer = () => {
  const {
    isRunning,
    minutes,
    seconds,
    color,
    percentage,
    handleChangeIsRunning,
  } = usePomodoroTimer();

  return (
    <div className={styles.container}>
      <ChooseTimerMode />
      <div className={styles.gradient}>
        <div className={styles.ring}>
          <CircleProgressBar
            percentage={percentage}
            strokeColorActive={`var(--${color})`}
            strokeColorBg="transparent"
            strokeWidth={12}
            radius={180}
            className={styles.bar}
          >
            <div className={styles.box}>
              <p className={styles.time}>
                {minutes}:{seconds}
              </p>
              <Button className={styles.btn} onClick={handleChangeIsRunning}>
                {isRunning ? "PAUSE" : "RUN"}
              </Button>
            </div>
          </CircleProgressBar>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
