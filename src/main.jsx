import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";

const savedTheme = localStorage.getItem("theme") || "dark-theme";
if (savedTheme) {
  document.documentElement.className = savedTheme;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
