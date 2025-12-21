// components/Music/styles/musicSidebar.styles.js

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import HistoryIcon from "@mui/icons-material/History";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

/* ================= EXPORT MUI ================= */

export {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ExpandMoreIcon,
  HomeIcon,
  ExploreIcon,
  LibraryMusicIcon,
  FavoriteIcon,
  DownloadIcon,
  HistoryIcon,
  QueueMusicIcon,
};


export const sidebarRoot = (theme) => ({
  width: "20%",
  height: "100%",
  bgcolor: "background.paper",
  borderRight: `1px solid ${theme.palette.divider}`,
  flexShrink: 0,
  px: 2,
  py: 1.5,
  overflowY: "auto",
});

export const sectionLabel = {
  color: "text.secondary",
  fontWeight: 600,
  letterSpacing: "0.6px",
  textTransform: "uppercase",
};

export const sidebarItem = {
  borderRadius: 1,
  mb: 0.5,
  transition: "background-color 0.2s",
  "&:hover": {
    bgcolor: "action.hover",
  },
};

export const sidebarIcon = {
  minWidth: 36,
  color: "text.secondary",
};

export const accordionRoot = {
  bgcolor: "transparent",
  mt: 2,
  "&::before": { display: "none" },
};

export const accordionTitle = {
  fontWeight: 600,
  letterSpacing: "0.6px",
  color: "text.secondary",
  textTransform: "uppercase",
};
