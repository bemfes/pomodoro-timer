import Button from "@/shared/ui/Button";
import { FC } from "react";
import styles from "./ChangeFont.module.css";
import type { Fonts } from "@/entities/settings";

const ChangeFont: FC = () => {
  const fonts: Fonts[] = ["manrope", "georgian", "jet"];

  return (
    <div className={styles.container}>
      {fonts.map((fontItem: Fonts) => (
        <Button
          key={fontItem}
          className={`${styles.btn} ${styles[fontItem]} ${styles.active}`}
          onClick={() => {}}
        >
          Aa
        </Button>
      ))}
    </div>
  );
};

export default ChangeFont;
