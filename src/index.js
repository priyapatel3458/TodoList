import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const rootElement = document.getElementById("root");
//! Actually renders in the browser
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
