import metamaskIcon from "assets/img/walletProviders/metamask.png";
import walletConnectIcon from "assets/img/walletProviders/walletConnect.png";
import Provider from "./Provider";
import { ButtonTypes, ProviderTypes } from "types";
import CustomModal from "components/UI_KIT/CustomModal";
import CustomButton from "components/UI_KIT/CustomButton";

interface WalletProvidersModalProps {
  isOpen: boolean;
  onClose: (provider?: ProviderTypes) => void;
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
            onClick={() => onClose(ProviderTypes.metamask)}
          />
          <Provider
            icon={walletConnectIcon}
            name={ProviderTypes.walletConnect}
            onClick={() => onClose(ProviderTypes.walletConnect)}
          />
        </>
      }
      footer={
        <CustomButton
          type={ButtonTypes.danger}
          onClick={() => onClose()}
          text="Cancel"
        />
      }
    ></CustomModal>
  );
}
