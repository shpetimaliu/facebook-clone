import React from "react";
import ReactDOM from "react-dom";
import { BrowserRotuer as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles/icons/icons.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
