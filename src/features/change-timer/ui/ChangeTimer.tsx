import Input from "@/shared/ui/Input";
import styles from "./ChangeTimer.module.css";
import { useChangeTimer } from "../model/useChangeTimer";

const ChangeTimer = () => {
  const { pomodoroInput, shortBreakInput, longBreakInput } = useChangeTimer();

  return (
    <div className={styles.grid}>
      <Input
        className={styles.container}
        type="number"
        value={pomodoroInput.value}
        htmlFor="pomodoro"
        id="pomodoro"
        labelText="pomodoro"
        onChange={(e) => pomodoroInput.handleInputChange(e)}
      />
      <Input
        className={styles.container}
        type="number"
        value={shortBreakInput.value}
        htmlFor="short-break"
        id="short-break"
        labelText="short break"
        onChange={(e) => shortBreakInput.handleInputChange(e)}
      />
      <Input
        className={styles.container}
        type="number"
        value={longBreakInput.value}
        htmlFor="long-break"
        id="long-break"
        labelText="long break"
        onChange={(e) => longBreakInput.handleInputChange(e)}
      />
    </div>
  );
};

export default ChangeTimer;
