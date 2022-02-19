import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";

import "assets/demo/demo.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/css/nucleo-icons.css";

import App from "App";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId={process.env.REACT_APP_MORALIS_ID!}
      serverUrl={process.env.REACT_APP_MORALIS_URL!}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
