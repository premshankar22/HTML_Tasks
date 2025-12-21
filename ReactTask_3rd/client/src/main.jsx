import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppThemeProvider } from "./context/ThemeContext";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
      <AppThemeProvider>
       <App />
    </AppThemeProvider>
  </StrictMode>
);

