import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
