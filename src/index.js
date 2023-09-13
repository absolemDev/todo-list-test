import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./theme.css";
import App from "./app/App";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
