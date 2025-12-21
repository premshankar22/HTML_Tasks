// components/Todo/styles/todoHeader.styles.js

import {
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
  TextField,
  Avatar,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

import { BsMastodon } from "react-icons/bs";


export const headerRoot = {
  height: "10vh",
  width: "100%",
  px: 2,
  display: "flex",
  alignItems: "center",
  gap: 2,
  borderBottom: "1px solid #e5e7eb",
  backgroundColor: "#ffffff",
  flexShrink: 0,
};


export const titleWrapper = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
};

export const titleText = {
  fontWeight: 800,
  color: "#1e293b",
};

/* ================= CENTER ================= */
export const searchWrapper = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

export const searchField = {
  width: "60%",
  backgroundColor: "#f8fafc",
  borderRadius: 2,
};


export const rightActions = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const iconButtonStyle = {
  color: "#334155",
};

export const avatarStyle = {
  width: 30,
  height: 30,
  bgcolor: "#2563eb",
  fontSize: "0.85rem",
};

export const homeButtonStyle = {
  textTransform: "none",
  fontWeight: 500,
  color: "#1e293b",
};


export {
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
  TextField,
  Avatar,
  HomeIcon,
  NewReleasesIcon,
  HelpOutlineIcon,
  SettingsIcon,
  SearchIcon,
  BsMastodon,
};
