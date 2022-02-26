import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useMoralis } from "react-moralis";
import ConectWalletModal from "./WalletModal/ConnectWalletModal";
import { ProviderTypes } from "types";
import Actions from "redux/actions";
import { RootState } from "redux/reducers";
import LogoutModal from "./WalletModal/LogoutModal";
import WalletInfo from "./WalletInfo";
import UserModal from "../UserModal";

export default function ConnectWallet() {
  const dispatch = useDispatch();

  const [connectModal, setConnectModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const { isAuthenticated, authenticate, logout, account, user, Moralis } =
    useMoralis();

  const userData = useSelector((state: RootState) => state.auth.user);

  const login = useCallback(
    (payload: any) => dispatch(Actions.AuthActions.Login.success(payload)),
    [dispatch]
  );

  const storeLogout = useCallback(
    () => dispatch(Actions.AuthActions.Logout()),
    [dispatch]
  );

  const balanceToRedux = useCallback(
    (payload: string) => dispatch(Actions.AuthActions.Balance(payload)),
    [dispatch]
  );

  const handleLogout = () => {
    setLogoutModal(false);
    logout();
    storeLogout();
  };

  const closeConnectModal = (provider?: ProviderTypes) => {
    setConnectModal(false);
    if (provider) {
      authenticate({
        provider,
        signingMessage: "Authorize linking of your wallet",
      });
    }
  };

  const handleWalletConnect = () => {
    setConnectModal(true);
  };

  const closeLogoutModal = () => {
    setLogoutModal(false);
  };

  const openLogoutModal = () => {
    setShowUserModal(false);
    setLogoutModal(true);
  };

  const handleCloseUserModal = () => {
    setShowUserModal(false);
  };

  const handleOpenUserModal = () => {
    setShowUserModal(true);
  };

  // Send user data to redux after authentication
  useEffect(() => {
    if (isAuthenticated) {
      login(JSON.parse(JSON.stringify(user)));
    }
  }, [isAuthenticated, login, user, account]);

  // Fetch address balance on address change
  useEffect(() => {
    const getBalances = async () => {
      try {
        //@ts-ignore
        const balances = await Moralis.Web3API.account.getNativeBalance();
        balanceToRedux(balances.balance);
      } catch (e) {
        balanceToRedux("0");
      }
    };
    if (userData?.accounts?.length) {
      getBalances();
    }
  }, [userData.accounts, Moralis, isAuthenticated, balanceToRedux]);

  return (
    <>
      {isAuthenticated && userData.accounts ? (
        <WalletInfo
          address={userData.accounts[0]}
          balance={userData.balance}
          onClick={handleOpenUserModal}
        />
      ) : (
        <Button
          id="connect"
          className="d-none d-lg-block"
          type="button"
          color="default"
          onClick={handleWalletConnect}
        >
          CONNECT
        </Button>
      )}
      <ConectWalletModal isOpen={connectModal} onClose={closeConnectModal} />
      <LogoutModal
        onLogout={handleLogout}
        isOpen={logoutModal}
        onClose={closeLogoutModal}
      />
      <UserModal
        onLogout={openLogoutModal}
        isOpen={showUserModal}
        onClose={handleCloseUserModal}
      />
    </>
  );
}
