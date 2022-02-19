import { Modal } from "reactstrap";
import metamaskIcon from "assets/img/walletProviders/metamask.png";
import walletConnectIcon from "assets/img/walletProviders/walletConnect.png";
import Provider from "./Provider";
import { ProviderTypes } from "Types";

interface WalletProvidersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletProvidersModal({
  isOpen,
  onClose,
}: WalletProvidersModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "1rem",
      }}
    >
      <p onClick={() => onClose()} style={{ fontSize: 10, color: "black" }}>
        Close Modal
      </p>
      <div style={{ display: "flex", width: "100%" }}>
        <Provider
          icon={metamaskIcon}
          name={ProviderTypes.metamask}
          onClick={onClose}
        />
        <Provider
          icon={walletConnectIcon}
          name={ProviderTypes.walletConnect}
          onClick={onClose}
        />
      </div>
    </Modal>
  );
}
