import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./routes/app";
import store from "./redux/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
