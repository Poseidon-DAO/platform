import { useState } from "react";
import { Button } from "reactstrap";
import { useMoralis } from "react-moralis";
import WalletProvidersModal from "./WalletModal/WalletModal";
import { ProviderTypes } from "Types";

export default function ConnectWallet() {
  const [connectModal, setConnectModal] = useState(false);
  const { isAuthenticated, authenticate, logout } = useMoralis();

  const handleWalletConnect = async () => {
    if (isAuthenticated) logout();
    else {
      setConnectModal(true);
    }
  };

  const closeModal = (provider?: ProviderTypes) => {
    setConnectModal(false);
    if (provider) {
      authenticate({
        provider,
        signingMessage: "Authorize linking of your wallet",
      });
    }
  };

  return (
    <>
      <Button
        id="connect"
        className="d-none d-lg-block"
        type="button"
        color="default"
        onClick={handleWalletConnect}
      >
        {isAuthenticated ? "DISCONNECT" : "CONNECT"}
      </Button>
      <WalletProvidersModal isOpen={connectModal} onClose={closeModal} />
    </>
  );
}
