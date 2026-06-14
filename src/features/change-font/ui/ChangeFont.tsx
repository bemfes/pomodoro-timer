import Button from "@/shared/ui/Button";
import { FC } from "react";
import styles from "./ChangeFont.module.css";
import type { Fonts } from "@/entities/settings";
import { useChangeFont } from "../model/useChangeFont";

const ChangeFont: FC = () => {
  const fonts: Fonts[] = ["manrope", "georgian", "jet"];

  const { font, handleChangeFont } = useChangeFont();

  return (
    <div className={styles.container}>
      {fonts.map((fontItem: Fonts) => (
        <Button
          key={fontItem}
          className={`${styles.btn} ${styles[fontItem]} ${font === fontItem ? styles.active : ""}`}
          onClick={() => handleChangeFont(fontItem)}
        >
          Aa
        </Button>
      ))}
    </div>
  );
};

export default ChangeFont;
