import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../theme/appTheme";

const ThemeContext = createContext();

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("light"); 

  function toggleTheme() {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
