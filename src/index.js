import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./hooks/Context";
import { AnimatedRoutes } from "./components";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
