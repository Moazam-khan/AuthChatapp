import { AppProvider } from "@/providers";
import "@/styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TokenProvider } from "./providers/TokenProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <TokenProvider>
        <App />
      </TokenProvider>
    </AppProvider>
  </React.StrictMode>
);
