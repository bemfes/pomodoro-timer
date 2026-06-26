import { FC, useState } from "react";
import IconSettings from "@/shared/assets/images/icon-settings.svg";
import Button from "@/shared/ui/Button";
import styles from "./SettingsModal.module.css";
import Modal from "@/shared/ui/Modal";
import ChangeColor from "@/features/change-color";
import ChangeFont from "@/features/change-font";
import ChangeTimer from "@/features/change-timer";
import SwitchSound from "@/features/switch-sound";

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
        <div className={styles.settings}>
          <p className={styles.title}>Settings</p>
        </div>
        <div className={`${styles.boxCol} ${styles.box}`}>
          <p className={styles.text}>TIME (MINUTES)</p>
          <ChangeTimer />
        </div>
        <div className={`${styles.boxRow} ${styles.box}`}>
          <p className={styles.text}>SOUND</p>
          <SwitchSound />
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
