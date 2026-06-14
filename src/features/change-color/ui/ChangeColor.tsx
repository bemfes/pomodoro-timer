import { FC } from "react";
import IconCheck from "@/shared/assets/images/icon-check.svg";
import Button from "@/shared/ui/Button";
import styles from "./ChangeColor.module.css";
import { Colors } from "@/entities/settings";
import { useChangeColor } from "../model/useChangeColor";

const ChangeColor: FC = () => {
  const colors: Colors[] = ["red", "blue", "purple"];

  const { color, handleChangeColor } = useChangeColor();

  return (
    <div className={styles.container}>
      {colors.map((colorItem: Colors) => (
        <Button
          key={colorItem}
          className={`${styles.btn} ${styles[colorItem]}`}
          onClick={() => handleChangeColor(colorItem)}
        >
          {color === colorItem && <IconCheck />}
        </Button>
      ))}
    </div>
  );
};

export default ChangeColor;
