import { FC, useState } from "react";
import IconSettings from "@/shared/assets/images/icon-settings.svg";
import Button from "@/shared/ui/Button";
import styles from "./SettingsModal.module.css";
import Modal from "@/shared/ui/Modal";
import ChangeColor from "@/features/change-color/ui";
import ChangeFont from "@/features/change-font/ui";
import ChangeTimer from "@/features/change-timer/ui";

const SettingsModal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Button className={styles.open} onClick={() => setIsOpen(true)}>
        <IconSettings />
      </Button>
      <Modal
        className={styles.modal}
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <p className={styles.title}>Settings</p>
        <div className={`${styles.boxCol} ${styles.box}`}>
          <p className={styles.text}>TIME (MINUTES)</p>
          <ChangeTimer />
        </div>
        <div className={`${styles.boxRow} ${styles.box}`}>
          <p className={styles.text}>FONT</p>
          <ChangeFont />
        </div>
        <div className={`${styles.boxRow} ${styles.box}`}>
          <p className={styles.text}>COLOR</p>
          <ChangeColor />
        </div>
      </Modal>
    </div>
  );
};

export default SettingsModal;
