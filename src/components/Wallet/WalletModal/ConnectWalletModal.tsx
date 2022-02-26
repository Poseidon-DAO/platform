import { Button } from "reactstrap";
import metamaskIcon from "assets/img/walletProviders/metamask.png";
import walletConnectIcon from "assets/img/walletProviders/walletConnect.png";
import Provider from "./Provider";
import { ButtonTypes, ProviderTypes } from "types";
import CustomModal from "components/CustomModal";
import CustomButton from "components/CustomButton";

interface WalletProvidersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletProvidersModal({
  isOpen,
  onClose,
}: WalletProvidersModalProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      header="Connect your wallet"
      onClose={onClose}
      body={
        <>
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
        </>
      }
      footer={
        <CustomButton
          type={ButtonTypes.danger}
          onClick={onClose}
          text="Cancel"
        />
      }
    ></CustomModal>
  );
}
