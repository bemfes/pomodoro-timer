import { FC } from "react";
import styles from "./PomodoroTimerPage.module.css";
import SettingsModal from "@/widgets/SettingsModal";
import PomodoroTimer from "@/widgets/PomodoroTimer";

const PomodoroTimerPage: FC = () => {
  return (
    <>
      <p className={styles.title}>pomodoro</p>
      <PomodoroTimer />
      <SettingsModal />
    </>
  );
};

export default PomodoroTimerPage;
