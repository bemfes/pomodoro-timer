import { switchSound } from "@/entities/settings";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import Button from "@/shared/ui/Button";
import styles from "./SwitchSound.module.css";

const SwitchSound = () => {
  const dispatch = useAppDispatch();
  const { color, soundOn } = useAppSelector((state) => state.settingsReducer);
  return (
    <div className={styles.box}>
      <p className={styles.text}>Off</p>
      <Button
        className={`${styles.btn} ${soundOn ? `${styles[color]} ${styles.active}` : styles.off}`}
        onClick={() => dispatch(switchSound())}
      />
      <p className={styles.text}>On</p>
    </div>
  );
};

export default SwitchSound;
