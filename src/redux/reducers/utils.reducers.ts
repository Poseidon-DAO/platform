import Actions from "../actions";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";
import { IReduxAction, ToastTypes } from "types";

export interface IUtilsState extends ApiReducerState {
  toast: {
    text: string;
    type: ToastTypes;
  };
}

const initialState = {
  ...apiReducerInitialState,
  toast: {
    text: "",
    type: ToastTypes.success,
  },
};

const GlobalReducers = (
  state: IUtilsState = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case Actions.UtilsActions.NEW_TOAST:
      return {
        ...state,
        toast: {
          text: payload.text,
          type: payload.type || ToastTypes.success,
        },
      };
    case Actions.UtilsActions.CLEAR_TOAST:
      return {
        ...state,
        toast: initialState.toast,
      };
    default:
      return state;
  }
};

export default GlobalReducers;
