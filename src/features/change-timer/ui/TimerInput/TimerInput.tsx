import Button from "@/shared/ui/Button";
import Input, { InputProps } from "@/shared/ui/Input";
import { FC } from "react";
import IconChevronUp from "@/shared/assets/images/icon-chevron-up.svg";
import IconChevronDown from "@/shared/assets/images/icon-chevron-down.svg";
import styles from "./TimerInput.module.css";
import { TIMER_MAX_VALUE, TIMER_MIN_VALUE } from "@/shared/constants";

interface TimerInputProps extends Omit<InputProps, "className" | "type"> {
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const TimerInput: FC<TimerInputProps> = ({
  handleIncrease,
  handleDecrease,
  ...inputProps
}) => {
  const isDisabledUp = Number(inputProps.value) >= TIMER_MAX_VALUE;
  const isDisabledDown = Number(inputProps.value) <= TIMER_MIN_VALUE;

  return (
    <div className={styles.parent}>
      <Input type="number" className={styles.container} {...inputProps} />
      <div className={styles.buttons}>
        <Button
          disabled={isDisabledUp}
          className={`${styles.btn}`}
          onClick={handleIncrease}
        >
          <IconChevronUp className={`${styles.arrow}`} />
        </Button>
        <Button
          disabled={isDisabledDown}
          className={`${styles.btn}`}
          onClick={handleDecrease}
        >
          <IconChevronDown className={`${styles.arrow}`} />
        </Button>
      </div>
    </div>
  );
};

export default TimerInput;
