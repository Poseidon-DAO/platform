import Actions from "../actions";
import { IReduxAction } from "types";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";

interface IAuthState extends ApiReducerState {
  wallet: any;
}

const initialState = {
  ...apiReducerInitialState,
  wallet: {},
};

const WalletReducer = (
  state: IAuthState = initialState,
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
    case Actions.AuthActions.LOGOUT.SUCCESS:
      return {
        ...state,
        wallet: {},
      };
    default:
      return state;
  }
};

export default WalletReducer;
