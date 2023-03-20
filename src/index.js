// React
import React from "react";
// Root
import { createRoot } from "react-dom/client";
// CSS
import "./styles.css";
// App
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
