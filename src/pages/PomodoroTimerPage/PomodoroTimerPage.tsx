import { FC } from "react";
import styles from "./PomodoroTimerPage.module.css";
import SettingsModal from "@/widgets/SettingsModal/ui";

const PomodoroTimerPage: FC = () => {
  return (
    <>
      <p className={styles.title}>pomodoro</p>
      <SettingsModal />
    </>
  );
};

export default PomodoroTimerPage;
