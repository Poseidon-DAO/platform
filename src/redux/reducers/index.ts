import { combineReducers } from "redux";
import AuthReducer, { IAuthState } from "./auth.reducers";
import WalletReducer, { IWalletState } from "./wallet.reducers";
import UtilsReducer, { IUtilsReducer } from "./utils.reducers";

export default combineReducers({
  auth: AuthReducer,
  wallet: WalletReducer,
  utils: UtilsReducer,
});

export interface RootState {
  auth: IAuthState;
  wallet: IWalletState;
  utils: IUtilsReducer;
}
