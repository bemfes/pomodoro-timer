import { FC, useState } from "react";
import IconSettings from "@/shared/assets/images/icon-settings.svg";
import Button from "@/shared/ui/Button";
import styles from "./SettingsModal.module.css";
import Modal from "@/shared/ui/Modal";

const SettingsModal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Button className={styles.open} onClick={() => setIsOpen(true)}>
        <IconSettings />
      </Button>
      <Modal onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <p className={styles.title}>Settings</p>
      </Modal>
    </div>
  );
};

export default SettingsModal;
