import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./assets/style.css";


import { AuthContexProvider } from "./context/AuthContext.jsx";
import { IsLoadingProvider } from "./context/IsLoadingContex.jsx";

IsLoadingProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContexProvider>
      <IsLoadingProvider>
        <App />
      </IsLoadingProvider>
    </AuthContexProvider>
  </React.StrictMode>
);
