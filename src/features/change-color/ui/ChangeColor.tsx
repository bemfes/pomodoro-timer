import { FC } from "react";
import IconCheck from "@/shared/assets/images/icon-check.svg";
import Button from "@/shared/ui/Button";
import styles from "./ChangeColor.module.css";

const ChangeColor: FC = () => {
  return (
    <div className={styles.container}>
      <Button className={`${styles.btn} ${styles.red}`} onClick={() => {}}>
        <IconCheck />
      </Button>
      <Button className={`${styles.btn} ${styles.blue}`} onClick={() => {}}>
        <IconCheck />
      </Button>
      <Button className={`${styles.btn} ${styles.purple}`} onClick={() => {}}>
        <IconCheck />
      </Button>
    </div>
  );
};

export default ChangeColor;
