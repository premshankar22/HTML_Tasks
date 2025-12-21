// components/Music/musicFooterPlayer.styles.js

import {
  Box,
  Typography,
  IconButton,
  Slider,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";


export const footerRoot = (theme) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  px: 3,
  bgcolor: "background.paper",
  borderTop: `1px solid ${theme.palette.divider}`,
});

export const emptyState = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  px: 3,
  color: "text.secondary",
};

export const leftSection = {
  width: 240,
};

export const centerSection = {
  flex: 1,
  px: 4,
};

export const progressRow = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const controlRow = {
  display: "flex",
  justifyContent: "center",
  mt: 1,
  gap: 1,
};

export const playButton = (theme) => ({
  bgcolor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    bgcolor: theme.palette.primary.dark,
  },
});

export const rightSection = {
  width: 180,
  display: "flex",
  alignItems: "center",
  gap: 1,
};


export {
  Box,
  Typography,
  IconButton,
  Slider,
  PlayArrowIcon,
  PauseIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  VolumeUpIcon,
};
