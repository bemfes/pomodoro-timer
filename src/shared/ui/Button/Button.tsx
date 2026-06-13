import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
