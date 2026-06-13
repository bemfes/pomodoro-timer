import Input from "@/shared/ui/Input";
import styles from "./ChangeTimer.module.css";

const ChangeTimer = () => {
  return (
    <div className={styles.grid}>
      <Input
        className={styles.container}
        type="number"
        value="5"
        htmlFor="pomodoro"
        id="pomodoro"
        labelText="pomodoro"
        onChange={() => {}}
      />
      <Input
        className={styles.container}
        type="number"
        value="5"
        htmlFor="short-break"
        id="short-break"
        labelText="short break"
        onChange={() => {}}
      />
      <Input
        className={styles.container}
        type="number"
        value="5"
        htmlFor="long-break"
        id="long-break"
        labelText="long break"
        onChange={() => {}}
      />
    </div>
  );
};

export default ChangeTimer;
