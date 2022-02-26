import { ToastTypes } from "types";

export const NEW_TOAST = "NEW_TOAST";
export const CLEAR_TOAST = "CLEAR_TOAST";

export const addToast = (payload: { text: string; type?: ToastTypes }) => ({
  type: NEW_TOAST,
  payload,
});
export const clearToast = () => ({ type: CLEAR_TOAST });
