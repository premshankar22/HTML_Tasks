// components/Music/styles/musicPlayerPage.styles.js

import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";


export {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  MusicNoteIcon,
  PlayArrowIcon,
  DeleteIcon,
};



export const pageRoot = {
  height: "100%",
  width: "100%",
};

export const addButton = {
  mb: 1,
  textTransform: "none",
};

export const storageText = {
  mb: 1,
};

export const emptyState = {
  mt: 3,
  color: "text.secondary",
  textAlign: "center",
};

export const songItem = (isActive) => ({
  borderRadius: 1,
  mb: 0.5,
  bgcolor: isActive ? "rgba(25,118,210,0.08)" : "transparent",
});

export const songIcon = {
  minWidth: 36,
};
