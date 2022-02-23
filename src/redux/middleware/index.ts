import { all, call, takeEvery } from "redux-saga/effects";
// import Auth from "./auth.middleware";
import { IReduxAction } from "types";

function log({ type, payload }: IReduxAction) {
  console.log("ACTION", type, payload);
}

function* RootMiddleware() {
  yield all([takeEvery("*", log)]);
}
export default RootMiddleware;
