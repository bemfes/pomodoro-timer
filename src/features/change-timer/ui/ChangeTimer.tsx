import Input from "@/shared/ui/Input";
import styles from "./ChangeTimer.module.css";
import { useChangeTimer } from "../model";

const ChangeTimer = () => {
  const {
    pomodoro,
    longBreak,
    shortBreak,
    handleChangePomodoro,
    handleChangeShortBreak,
    handleChangeLongBreak,
  } = useChangeTimer();

  return (
    <div className={styles.grid}>
      <Input
        className={styles.container}
        type="number"
        value={pomodoro}
        htmlFor="pomodoro"
        id="pomodoro"
        labelText="pomodoro"
        onChange={(e) => handleChangePomodoro(e)}
      />
      <Input
        className={styles.container}
        type="number"
        value={shortBreak}
        htmlFor="short-break"
        id="short-break"
        labelText="short break"
        onChange={(e) => handleChangeShortBreak(e)}
      />
      <Input
        className={styles.container}
        type="number"
        value={longBreak}
        htmlFor="long-break"
        id="long-break"
        labelText="long break"
        onChange={(e) => handleChangeLongBreak(e)}
      />
    </div>
  );
};

export default ChangeTimer;
