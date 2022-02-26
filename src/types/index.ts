export enum ProviderTypes {
  metamask = "metamask",
  walletConnect = "walletConnect",
}

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  info = "info",
  danger = "danger",
  link = "link",
}

export enum ToastTypes {
  success = "success",
  error = "error",
  warn = "warn",
  info = "info",
}

export interface IUser {
  username: string;
  authData: any;
  createdAt: string;
  updatedAt: string;
  accounts: string[];
  ethAddress: string;
  sessionToken: string;
  objectId: string;
  balance: any;
}

//Redux types
export interface IReduxAction {
  type: string;
  payload?: any;
}
