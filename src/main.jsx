import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./assets/style.css";
import moment from "moment/moment.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
