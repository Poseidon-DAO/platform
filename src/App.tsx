import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { useCallback, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { NetworkTypes } from "types";
import Actions from "redux/actions";

export default function App() {
  const toastData = useSelector((state: RootState) => state.utils.toast);
  const [chainId, setChainId] = useState<string>("");
  const { Moralis, isAuthenticated, account, logout } = useMoralis();
  const dispatch = useDispatch();
  const newToast = useCallback(
    (payload) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );
  const updateChain = useCallback(
    (payload) => dispatch(Actions.WalletActions.UpdateChain(payload)),
    [dispatch]
  );
  const updateBalance = useCallback(
    (payload: string) => dispatch(Actions.AuthActions.Balance(payload)),
    [dispatch]
  );
  const updateNfts = useCallback(
    (payload: any) => dispatch(Actions.WalletActions.UpdateNfts(payload)),
    [dispatch]
  );
  const storeLogout = useCallback(
    () => dispatch(Actions.AuthActions.Logout()),
    [dispatch]
  );
  const userData = useSelector((state: RootState) => state.auth.user);

  //Initialize web3 functions
  const setWeb3Env = () => {
    getNetwork();
    monitorNetwork();
    monitorDisconnection();
  };

  //Toast depending on chain being used
  const getNetwork = async () => {
    try {
      await Moralis.enableWeb3();
      const chainID = await Moralis.getChainId();
      if (chainID) {
        setChainId(chainID);
        if (chainID !== "0x1") {
          newToast({
            text: "Please switch to a valid chain to use our platform",
            type: "warning",
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  //Reload on chain change
  const monitorNetwork = () => {
    Moralis.onChainChanged(function () {
      window.location.reload();
    });
  };

  //Check if user disconnects from inside Metamask
  const monitorDisconnection = () => {
    Moralis.onAccountChanged(function () {
      logout();
      storeLogout();
      window.location.reload();
    });
  };

  useEffect(() => {
    if (isAuthenticated) setWeb3Env();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  //Update chain of change in wallet
  useEffect(() => {
    if (chainId.length && userData.balance && account) {
      //@ts-ignore
      const chainName = NetworkTypes[chainId];
      updateChain({
        name: chainName,
        id: chainId,
        balance: userData.balance,
        address: account,
      });
    }
  }, [chainId, updateChain, userData.balance, account]);

  // Fetch address balance and NFTa on address change
  useEffect(() => {
    const getBalancesAndNfts = async () => {
      if (account) {
        try {
          const balances = await Moralis.Web3API.account.getNativeBalance({
            address: account,
            //@ts-ignore
            chain: chainId,
          });
          const nftList = await Moralis.Web3API.account.getNFTs({
            address: account,
            //@ts-ignore
            chain: chainId,
          });
          updateBalance(Moralis.Units.FromWei(balances.balance));
          updateNfts(nftList.result);
        } catch (e) {
          updateBalance("0");
        }
      }
    };
    if (account && chainId && isAuthenticated) {
      getBalancesAndNfts();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, isAuthenticated, updateBalance, chainId]);

  useEffect(() => {
    if (toastData.text.length) {
      toast[toastData.type](toastData.text, {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: true,
      });
    }
  }, [toastData]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props: any) => <LandingPage {...props} />} />
        <Redirect from="/" to="/components" />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}
