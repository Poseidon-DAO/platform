import Actions from "../actions";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";
import { IReduxAction } from "types";

interface IAuthState extends ApiReducerState {
  user: any;
}

const initialState = {
  ...apiReducerInitialState,
  user: {},
};

const AuthReducer = (
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
        user: payload,
      };
    case Actions.AuthActions.LOGOUT.SUCCESS:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default AuthReducer;
