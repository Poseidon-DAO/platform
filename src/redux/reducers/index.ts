import { combineReducers } from "redux";
import AuthReducer from "./auth.reducers";
import WalletReducer from "./wallet.reducers";

export default combineReducers({
  auth: AuthReducer,
  wallet: WalletReducer,
});
