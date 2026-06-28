import Button from "@/shared/ui/Button";
import styles from "./ChooseTimerMode.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { changeTimerMode, TIMER_MODES, TimerMode } from "@/entities/timer";

const ChooseTimerMode = () => {
  const dispatch = useAppDispatch();

  const { mode } = useAppSelector((state) => state.timerReducer);
  const { color } = useAppSelector((state) => state.settingsReducer);

  const handleChangeTimerMode = (mode: TimerMode) => {
    dispatch(changeTimerMode(mode));
  };

  return (
    <div className={styles.container}>
      {TIMER_MODES.map((modeItem) => (
        <Button
          key={modeItem.value}
          className={`${styles.btn} ${mode === modeItem.value ? `${styles[color]} ${styles.active}` : ""}`}
          onClick={() => handleChangeTimerMode(modeItem.value)}
        >
          {modeItem.label}
        </Button>
      ))}
    </div>
  );
};

export default ChooseTimerMode;
