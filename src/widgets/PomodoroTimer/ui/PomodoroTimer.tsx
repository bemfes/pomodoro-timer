import ChooseTimerMode from "@/features/choose-timer-mode";
import Button from "@/shared/ui/Button";
import { usePomodoroTimer } from "../model/usePomodoroTimer";
import styles from "./PomodoroTimer.module.css";

const PomodoroTimer = () => {
  const { isRunning, timeLeft, handleChangeIsRunning } = usePomodoroTimer();

  return (
    <div className={styles.container}>
      <ChooseTimerMode />
      <p>timer: {timeLeft}</p>
      <Button className="" onClick={handleChangeIsRunning}>
        {isRunning ? "PAUSE" : "RUN"}
      </Button>
    </div>
  );
};

export default PomodoroTimer;
