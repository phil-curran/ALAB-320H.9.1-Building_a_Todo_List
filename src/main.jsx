import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/normalize.css";
import "../src/skeleton.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
