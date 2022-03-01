export const UPDATE_CHAIN = "@wallet/update_chain";
export const UPDATE_NFTS = "@wallet/update_nfts";

export const UpdateChain = (payload: any) => ({
  type: UPDATE_CHAIN,
  payload,
});

export const UpdateNfts = (payload: any) => ({
  type: UPDATE_NFTS,
  payload,
});
