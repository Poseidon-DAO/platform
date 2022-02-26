import CustomButton from "components/UI_KIT/CustomButton";
import CustomModal from "components/UI_KIT/CustomModal";
import { ButtonTypes } from "types";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function LogoutModal({
  isOpen,
  onClose,
  onLogout,
}: LogoutModalProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      header="Are you sure you want to log out?"
      onClose={onClose}
      footer={
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <CustomButton
            onClick={onLogout}
            text="Logout"
            type={ButtonTypes.danger}
          />
          <CustomButton
            onClick={onClose}
            style={{ marginLeft: "1rem" }}
            type={ButtonTypes.info}
            text="Cancel"
          />
        </div>
      }
    ></CustomModal>
  );
}
