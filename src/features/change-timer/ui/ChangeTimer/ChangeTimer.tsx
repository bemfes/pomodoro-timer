import styles from "./ChangeTimer.module.css";
import { useChangeTimer } from "../../model/useChangeTimer";
import TimerInput from "../TimerInput/TimerInput";

const ChangeTimer = () => {
  const { pomodoroInput, shortBreakInput, longBreakInput } = useChangeTimer();

  return (
    <div className={styles.grid}>
      <TimerInput
        value={pomodoroInput.value}
        htmlFor="pomodoro"
        id="pomodoro"
        labelText="pomodoro"
        onChange={(e) => pomodoroInput.handleInputChange(e)}
        onBlur={pomodoroInput.handleInputBlur}
        handleIncrease={pomodoroInput.handleIncrease}
        handleDecrease={pomodoroInput.handleDecrease}
      />
      <TimerInput
        value={shortBreakInput.value}
        htmlFor="short-break"
        id="short-break"
        labelText="short break"
        onChange={(e) => shortBreakInput.handleInputChange(e)}
        onBlur={shortBreakInput.handleInputBlur}
        handleIncrease={shortBreakInput.handleIncrease}
        handleDecrease={shortBreakInput.handleDecrease}
      />

      <TimerInput
        value={longBreakInput.value}
        htmlFor="long-break"
        id="long-break"
        labelText="long break"
        onChange={(e) => longBreakInput.handleInputChange(e)}
        onBlur={longBreakInput.handleInputBlur}
        handleIncrease={longBreakInput.handleIncrease}
        handleDecrease={longBreakInput.handleDecrease}
      />
    </div>
  );
};

export default ChangeTimer;
