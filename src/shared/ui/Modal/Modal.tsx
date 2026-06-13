import React, { FC } from "react";
import styles from "./Modal.module.css";
import Button from "../Button";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  className: string;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClick, className }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${className}`}>
        <Button className={styles.close} onClick={onClick}>
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
