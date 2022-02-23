import asyncAction from "./asyncAction";

export const LOGIN = asyncAction("@auth/LOGIN");
export const LOGOUT = asyncAction("@auth/LOGOUT");

export const Login = {
  request: (payload: any) => ({ type: LOGIN.REQUEST, payload }),
  success: (payload: any) => ({ type: LOGIN.SUCCESS, payload }),
  failed: (payload: any) => ({ type: LOGIN.FAILED, payload }),
};

export const Logout = {
  request: (payload: any) => ({ type: LOGOUT.REQUEST, payload }),
  success: (payload: any) => ({ type: LOGOUT.SUCCESS, payload }),
  failed: (payload: any) => ({ type: LOGOUT.FAILED, payload }),
};
