import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/style.scss";
import { BrowserRouter } from "react-router-dom";
import { PositionProvider } from "./context/PostitionSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PositionProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </PositionProvider>
);
