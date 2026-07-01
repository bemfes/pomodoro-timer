import Button from "@/shared/ui/Button";
import Input, { InputProps } from "@/shared/ui/Input";
import { FC } from "react";
import IconChevronUp from "@/shared/assets/images/icon-chevron-up.svg";
import IconChevronDown from "@/shared/assets/images/icon-chevron-down.svg";
import styles from "./TimerInput.module.css";

interface TimerInputProps extends Omit<InputProps, "className" | "type"> {
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const TimerInput: FC<TimerInputProps> = ({
  handleIncrease,
  handleDecrease,
  ...inputProps
}) => {
  return (
    <div className={styles.parent}>
      <Input type="number" className={styles.container} {...inputProps} />
      <div className={styles.buttons}>
        <Button className={`${styles.btn}`} onClick={handleIncrease}>
          <IconChevronUp className={`${styles.arrow}`} />
        </Button>
        <Button className={`${styles.btn}`} onClick={handleDecrease}>
          <IconChevronDown className={`${styles.arrow}`} />
        </Button>
      </div>
    </div>
  );
};

export default TimerInput;
