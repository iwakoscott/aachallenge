import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// optional cofiguration
const options = {
  position: "bottom center",
  timeout: 5000,
  offset: "30px",
  transition: "scale"
};

const store = createStore(reducers, middleware);

ReactDOM.render(
  <AlertProvider {...options} template={AlertTemplate}>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  document.getElementById("root")
);
