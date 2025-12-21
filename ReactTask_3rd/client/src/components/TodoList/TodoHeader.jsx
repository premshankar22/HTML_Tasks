// components/Todo/TodoHeader.jsx

import { useNavigate } from "react-router-dom";

import {
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
  headerRoot,
  titleWrapper,
  titleText,
  searchWrapper,
  searchField,
  rightActions,
  iconButtonStyle,
  avatarStyle,
  homeButtonStyle,
} from "./styles/todoHeader.styles";

export default function TodoHeader() {
  const navigate = useNavigate();

  return (
    <Box sx={headerRoot}>
      {/* LEFT */}
      <Box sx={titleWrapper}>
        <BsMastodon size={30} color="#2563eb" />
        <Typography variant="h5" sx={titleText}>
          yNotes
        </Typography>
      </Box>

      {/* CENTER */}
      <Box sx={searchWrapper}>
        <TextField
          placeholder="Search notes, tasks, reminders..."
          size="small"
          sx={searchField}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ mr: 1, color: "#64748b" }} />
            ),
          }}
        />
      </Box>

      {/* RIGHT */}
      <Box sx={rightActions}>
        <Tooltip title="What's New">
          <IconButton sx={iconButtonStyle}>
            <NewReleasesIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Help & Feedback">
          <IconButton sx={iconButtonStyle}>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Settings">
          <IconButton sx={iconButtonStyle}>
            <SettingsIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Profile">
          <IconButton>
            <Avatar sx={avatarStyle}>U</Avatar>
          </IconButton>
        </Tooltip>

        <Button
          startIcon={<HomeIcon />}
          onClick={() => navigate("/")}
          sx={homeButtonStyle}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
}
