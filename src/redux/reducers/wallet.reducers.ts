import Actions from "../actions";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";
import { IReduxAction, IWallet } from "types";

export interface IWalletState extends ApiReducerState {
  wallet: IWallet;
  nfts: any;
}

const initialState = {
  ...apiReducerInitialState,
  wallet: {
    name: "",
    address: "",
    balance: "",
    id: "",
  },
  nfts: [],
};

const WalletReducer = (
  state: IWalletState = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case Actions.WalletActions.UPDATE_CHAIN:
      return {
        ...state,
        wallet: payload,
      };
    default:
      return state;
  }
};

export default WalletReducer;
