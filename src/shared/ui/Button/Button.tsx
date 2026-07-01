import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  className: string;
  onClick: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  style,
  disabled,
}) => {
  return (
    <button
      style={style}
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
