import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import InvoiceContextProvider from "./context/InvoiceContext";
import InvoiceCreateContextProvider from "./context/InvoiceCreateContext";
import InvoiceDeleteContextProvider from "./context/InvoiceDeleteContext";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <InvoiceContextProvider>
          <InvoiceCreateContextProvider>
            <InvoiceDeleteContextProvider>
              <App />
            </InvoiceDeleteContextProvider>
          </InvoiceCreateContextProvider>
        </InvoiceContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
