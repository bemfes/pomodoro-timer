import { FC, useState } from "react";
import IconSettings from "@/shared/assets/images/icon-settings.svg";
import Button from "@/shared/ui/Button";
import styles from "./SettingsModal.module.css";
import Modal from "@/shared/ui/Modal";
import ChangeColor from "@/features/change-color/ui";
import ChangeFont from "@/features/change-font/ui";

const SettingsModal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Button className={styles.open} onClick={() => setIsOpen(true)}>
        <IconSettings />
      </Button>
      <Modal onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <p className={styles.title}>Settings</p>
        <div>
          <p>FONT</p>
          <ChangeFont />
        </div>
        <div>
          <p>COLOR</p>
          <ChangeColor />
        </div>
      </Modal>
    </div>
  );
};

export default SettingsModal;
