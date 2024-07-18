import "@radix-ui/themes/styles.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppearanceProvider } from "./contexts/appearance";

function MyApp() {
  return (
    <AppearanceProvider>
      <App />
    </AppearanceProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
