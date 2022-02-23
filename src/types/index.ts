export enum ProviderTypes {
  metamask = "metamask",
  walletConnect = "walletConnect",
}

//Redux types
export interface IReduxAction {
  type: string;
  payload?: any;
}
