import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
