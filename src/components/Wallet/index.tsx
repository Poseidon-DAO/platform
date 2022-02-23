import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useMoralis } from "react-moralis";
import WalletProvidersModal from "./WalletModal/WalletModal";
import { ProviderTypes } from "types";
import Actions from "redux/actions";

export default function ConnectWallet() {
  const dispatch = useDispatch();

  const [connectModal, setConnectModal] = useState(false);
  const { isAuthenticated, authenticate, logout, account, user } = useMoralis();
  const login = useCallback(
    (payload: any) => dispatch(Actions.AuthActions.Login.success(payload)),
    [dispatch]
  );

  const handleWalletConnect = async () => {
    if (isAuthenticated) logout();
    else {
      setConnectModal(true);
    }
  };

  const closeModal = async (provider?: ProviderTypes) => {
    setConnectModal(false);
    if (provider) {
      authenticate({
        provider,
        signingMessage: "Authorize linking of your wallet",
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      login(JSON.parse(JSON.stringify(user)));
    }
  }, [isAuthenticated, login, user, account]);

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
