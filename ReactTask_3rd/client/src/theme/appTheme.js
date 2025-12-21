import { createTheme } from "@mui/material/styles";

/* ===============================
   SPOTIFY DARK THEME
================================ */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#1DB954", // Spotify green
    },

    background: {
      default: "#121212", // Spotify background
      paper: "#181818",   // Cards / surfaces
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },

    divider: "#2A2A2A",
  },

  typography: {
    fontFamily: `"Inter", system-ui, -apple-system, BlinkMacSystemFont`,

    h6: {
      fontWeight: 700,
      letterSpacing: "0.3px",
    },

    subtitle2: {
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.6px",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: "rgba(29,185,84,0.15)",
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#2A2A2A",
        },
      },
    },
  },
});

/* ===============================
   LIGHT THEME (CLEAN & MODERN)
================================ */
export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1DB954", // Same brand color
    },

    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#121212",
      secondary: "#616161",
    },

    divider: "#E0E0E0",
  },

  typography: {
    fontFamily: `"Inter", system-ui, -apple-system, BlinkMacSystemFont`,

    h6: {
      fontWeight: 700,
      letterSpacing: "0.3px",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.04)",
          },
        },
      },
    },
  },
});
