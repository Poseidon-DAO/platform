import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
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
    <Modal isOpen={isOpen}>
      <ModalHeader charCode="X" toggle={() => onClose()}>
        <h4 style={{ color: "black" }}>Connect your wallet</h4>
      </ModalHeader>
      <ModalBody
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      </ModalBody>
      <ModalFooter style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => onClose()}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}
