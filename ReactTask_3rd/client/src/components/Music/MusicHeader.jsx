// components/Music/MusicHeader.jsx

import { GiMusicSpell } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import { useAppTheme } from "../../context/ThemeContext";
import SearchBar from "./SearchBar";

import {
  Box,
  Typography,
  Button,
  Switch,
  Tooltip,
  HomeIcon,
  LightModeIcon,
  DarkModeIcon,
  headerRoot,
  leftSection,
  titleStyle,
  offlineBadge,
  centerSection,
  rightSection,
  homeButton,
} from "./styles/musicHeader.styles";

export default function MusicHeader() {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useAppTheme();

  return (
    <Box sx={headerRoot}>
      {/* LEFT */}
      <Box sx={leftSection}>
        <GiMusicSpell size={26} color="#1DB954" />

        <Typography variant="h6" sx={titleStyle}>
          SoundFlow
        </Typography>

        <Box sx={offlineBadge}>OFFLINE</Box>
      </Box>

      {/* CENTER */}
      <Box sx={centerSection}>
        <SearchBar placeholder="Search songs, artists..." />
      </Box>

      {/* RIGHT */}
      <Box sx={rightSection}>
        <Tooltip
          title={
            mode === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LightModeIcon fontSize="small" />
            <Switch
              checked={mode === "dark"}
              onChange={toggleTheme}
              color="primary"
            />
            <DarkModeIcon fontSize="small" />
          </Box>
        </Tooltip>

        <Button
          startIcon={<HomeIcon />}
          onClick={() => navigate("/")}
          sx={homeButton}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
}
