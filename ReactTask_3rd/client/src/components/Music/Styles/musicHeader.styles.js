// components/Music/styles/musicHeader.styles.js

import {
  Box,
  Typography,
  Button,
  Switch,
  Tooltip,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export {
  Box,
  Typography,
  Button,
  Switch,
  Tooltip,
  HomeIcon,
  LightModeIcon,
  DarkModeIcon,
};


export const headerRoot = {
  height: 64,
  px: 2,
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  bgcolor: "background.paper",
  zIndex: 10,
};

export const leftSection = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  whiteSpace: "nowrap",
};

export const titleStyle = {
  fontWeight: 700,
  letterSpacing: "0.5px",
};

export const offlineBadge = {
  ml: 1,
  px: 1.2,
  py: 0.3,
  borderRadius: "999px",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.4px",
  color: "#f57c00",
  backgroundColor: "#fff3e0",
  border: "1px solid #ffb74d",
  whiteSpace: "nowrap",
};

export const centerSection = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  px: 3,
};

export const rightSection = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const homeButton = {
  textTransform: "none",
  whiteSpace: "nowrap",
  fontWeight: 500,
};
