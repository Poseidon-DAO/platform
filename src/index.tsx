import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";

import "assets/demo/demo.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/css/nucleo-icons.css";

import store from "redux/store";

import App from "App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MoralisProvider
        appId={process.env.REACT_APP_MORALIS_ID!}
        serverUrl={process.env.REACT_APP_MORALIS_URL!}
      >
        <App />
      </MoralisProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
