import { combineReducers } from "redux";
import AuthReducer, { IAuthState } from "./auth.reducers";
import UtilsReducer, { IUtilsReducer } from "./utils.reducers";

export default combineReducers({
  auth: AuthReducer,
  utils: UtilsReducer,
});

export interface RootState {
  auth: IAuthState;
  utils: IUtilsReducer;
}
