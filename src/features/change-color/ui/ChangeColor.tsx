import { FC } from "react";
import IconCheck from "@/shared/assets/images/icon-check.svg";
import Button from "@/shared/ui/Button";
import styles from "./ChangeColor.module.css";
import { Colors } from "@/entities/settings";

const ChangeColor: FC = () => {
  const colors: Colors[] = ["red", "blue", "purple"];

  return (
    <div className={styles.container}>
      {colors.map((colorItem: Colors) => (
        <Button
          className={`${styles.btn} ${styles[colorItem]}`}
          onClick={() => {}}
        >
          <IconCheck />
        </Button>
      ))}
    </div>
  );
};

export default ChangeColor;
