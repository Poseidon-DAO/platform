import Actions from "../actions";
import { IReduxAction } from "types";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";

export interface IWalletState extends ApiReducerState {
  wallet: any;
}

const initialState = {
  ...apiReducerInitialState,
  wallet: {},
};

const WalletReducer = (
  state: IWalletState = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case Actions.AuthActions.LOGIN.REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case Actions.AuthActions.LOGIN.FAILED:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case Actions.AuthActions.LOGIN.SUCCESS:
      return {
        ...state,
        wallet: payload.wallet,
      };
    case Actions.AuthActions.LOGOUT:
      return {
        ...state,
        wallet: {},
      };
    default:
      return state;
  }
};

export default WalletReducer;
