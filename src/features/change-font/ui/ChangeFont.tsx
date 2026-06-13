import Button from "@/shared/ui/Button";
import { FC } from "react";
import styles from "./ChangeFont.module.css";

const ChangeFont: FC = () => {
  return (
    <div className={styles.container}>
      <Button
        className={`${styles.btn} ${styles.manrope} ${styles.active}`}
        onClick={() => {}}
      >
        Aa
      </Button>
      <Button className={`${styles.btn} ${styles.georgian}`} onClick={() => {}}>
        Aa
      </Button>
      <Button className={`${styles.btn} ${styles.jet}`} onClick={() => {}}>
        Aa
      </Button>
    </div>
  );
};

export default ChangeFont;
